import React from "react";
import "./App.css";
import TestPage from "./components/TestPage";
import Nav from "./Nav";
import FindBinsPage from "./FindBinsPage";
import AddBinsPage from "./AddBinsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={{ display: "flex", flexDirection: "column" }}>
        {/* <TestPage /> */}
        <Nav />
        {/* <Nav /> */}
        <div style={{ height: "40vh" }}>
          <Switch>
            <Route path="/" exact component={FindBinsPage} />
            <Route path="/addbins" component={AddBinsPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
