import React, { useState, useEffect } from 'react';
import mapStyles from './mapStyles';
import Form from './Form'

import {FormControlLabel, Checkbox, Button} from '@mui/material';
import { db } from '../firebase-config';
import { collection, getDocs } from '@firebase/firestore';

import { formatRelative } from 'date-fns';

import { createBin } from '../services/bin-service';

import { GeoPoint } from '@firebase/firestore';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

import '@reach/combobox/styles.css';
import { Firestore } from '@firebase/firestore';

const libraries = ['places'];
const mapContainerStyle = {
  height: '100vh',
  width: '100vw',
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
const center = {
  lat: 33.777039,
  lng: -84.395378,
};

const Map = () => {
  const [checkboxes, setCheckboxes] = useState({
        "Paper" : false,
        "Glass" : false,
        "Plastic" : false
    });
    
  const handleChange = (event) => {
        setCheckboxes({
            ...checkboxes,
            [event.target.name]: event.target.checked,
        });
    };

  const submit = (event) => {
      
  }

  const {Paper, Glass, Other} = checkboxes;

  
  //state for bins already loaded from firebase
  const [binsLoaded, setBinsLoaded] = useState([]);
  const binsCollectionRef = collection(db, 'bins');

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [bins, setBins] = React.useState([]);
  const [selected, setSelected] = React.useState(null);
  const [load, setLoad] = React.useState(false);

  //loads in all bins from firebase
  useEffect(() => {
    const getBins = async () => {
      const data = await getDocs(binsCollectionRef);
      setBinsLoaded(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBins();
  }, [load]);

  const createB = async (downvotes, lat, lng, materials, date, upvotes) => {
    await createBin(
      downvotes,
      new GeoPoint(lat, lng),
      materials,
      date,
      upvotes
    );
  };

  const onMapClick = React.useCallback(
    (e) => {
      createB(0, e.latLng.lat(), e.latLng.lng(), 'everything', new Date(), 0);
      setBins((current) => [
        ...current,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date(),
        },
      ]);
      setLoad(!load);
    },
    [load]
  );

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    console.log(binsLoaded);
    console.log(bins);
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(18);
  }, []);

  if (loadError) return 'Error';
  if (!isLoaded) return 'Loading...';

   
    
  return (
    <div>
      <h1>Bins</h1>

      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {binsLoaded.map((bin) => (
          //   // DATA FROM FIREBASE
          //   console.log(bin);
          //   console.log(bin.location.latitude);
          //   console.log(bin.location.longitude);
          // }
          <Marker
            key={`${bin.location.latitude}-${bin.location.longitude}`}
            position={{
              lat: bin.location.latitude,
              lng: bin.location.longitude,
            }}
            onClick={() => {
              setSelected(bin);
            }}
            icon={{
              url: `/recycle-bin.svg`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
              scaledSize: new window.google.maps.Size(30, 30),
            }}
          />
        ))}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div class="binInfoContent">
              <h2>Recycling Bin</h2>
              <h3>What you can put in it:</h3>
              <p>cardboard, paper, plastic</p>
              <p>Found {formatRelative(selected.time, new Date())}</p>
              <button className="deleteButton">Delete</button>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
        
        <div>
            <FormControlLabel
                control={
                <Checkbox checked={Paper} onChange={handleChange} name="Paper" />
                }
                label="Paper"
            />

            <FormControlLabel
                control={
                <Checkbox checked={Glass} onChange={handleChange} name="Glass" />
                }
                label="Glass"
            />

            <FormControlLabel
                control={
                <Checkbox checked={Other} onChange={handleChange} name="Other" />
                }
                label="Other"
            />
            </div>
            
            <Button color="primary" variant= "contained" onClick={submit}>Submit</Button>
            
        
    </div>
  );
};

function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.png" alt="compass" height="40px" />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 33.777039, lng: () => -84.395378 },
      radius: 100 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  return (
    <div className="search">
      
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
    
  );
}

export default Map;
