import React from 'react';
import './App.css';
import TestPage from "./components/TestPage";
import FindBinsPage from './FindBinsPage';
import AddBinsPage from './AddBinsPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <TestPage />
      <Switch>
        <Route path ="/" exact component={MainPage} />
        <Route path ="/findbins" component={FindBinsPage} />
        <Route path ="/addbins" component={AddBinsPage} />
      </Switch>
    </div>
    </Router>
  );
}

const MainPage = () => (
  <div>
    <h1>Main Page</h1> 
    </div>
);

export default App;
