import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  const [findBinsButtonColor, setFindBinsButtonColor] = useState("#515F30");
  const [addBinsButtonColor, setAddBinsButtonColor] = useState("#8BA352");

  function changeFindButtonColor() {
    if (findBinsButtonColor === "#515F30") {
      setFindBinsButtonColor("#8BA352");
      setAddBinsButtonColor("#515F30");
    } else {
      setFindBinsButtonColor("#515F30");
      setAddBinsButtonColor("#8BA352");
    }
  }
  function changeAddButtonColor() {
    if (addBinsButtonColor === "#515F30") {
      setAddBinsButtonColor("#8BA352");
      setFindBinsButtonColor("#515F30");
    } else {
      setAddBinsButtonColor("#515F30");
      setFindBinsButtonColor("#8BA352");
    }
  }

  return (
    <nav style={{ width: "100%" }}>
      <div
        className="nav-top"
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px",
        }}
      >
        <img
          alt="recycling icon"
          className="logo"
          src="Logo.png"
          //   style={{ position: "absolute", left: "10px", top: "10px" }}
        />
        <div className="nav-links">
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
              About
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
