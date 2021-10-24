import { React, useEffect, useState } from "react";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";

const Map = () => {
    const [ bins, setBins ] = useState([]);
    const usersCollectionRef = collection( db, "bins" );

    /*id is a field that is unique to each Bin object it is inherent to 
    every firebase table it is what you use to identify objects */

    useEffect(() => {
    const getUsers = async() => {
      const data = await getDocs(usersCollectionRef);
      setBins(data.docs.map((doc) => ( {...doc.data(), id: doc.id } )));
    }
    getUsers();
  });
    
  return <div>
    
  </div>;
};
export default Map;
