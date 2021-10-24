import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const [findBinsButtonColor, setFindBinsButtonColor] = useState();
  const [addBinsButtonColor, setAddBinsButtonColor] = useState();

  function changeFindButtonColor() {
    if (findBinsButtonColor == "#515F30") {
      setFindBinsButtonColor("#8BA352");
      setAddBinsButtonColor("#515F30");
    } else {
      setFindBinsButtonColor("#515F30");
      setAddBinsButtonColor("#8BA352");
    }
  }
  function changeAddButtonColor() {
    if (addBinsButtonColor == "#515F30") {
      setAddBinsButtonColor("#8BA352");
      setFindBinsButtonColor("#515F30");
    } else {
      setAddBinsButtonColor("#515F30");
      setFindBinsButtonColor("#8BA352");
    }
  }

  return (
    <nav>
      <container className="nav-links">
        <img alt="recycling icon" className="logo" src="Logo.png" />

        <Link to="/">
          <button
            style={{ backgroundColor: findBinsButtonColor }}
            className="find-bins-button btn"
            onClick={changeFindButtonColor}
          >
            Find Bins
          </button>
        </Link>
        <Link to="/addbins">
          <button
            style={{ backgroundColor: addBinsButtonColor }}
            className="add-bins-button btn"
            onClick={changeAddButtonColor}
          >
            Add Bins
          </button>
        </Link>
      </container>
    </nav>
  );
}

export default Nav;
