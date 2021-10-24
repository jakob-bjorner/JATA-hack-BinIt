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
      <div className="App">
        {/* <TestPage /> */}
        <div>
          <Nav />
        </div>
        {/* <Nav /> */}

        <Switch>
          <Route path="/" exact component={FindBinsPage} />
          <Route path="/addbins" component={AddBinsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
