import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Nav from './Component/Nav/Nav';
import MenuDetails from './Component/MenuDetails/MenuDetails';

function App() {
  return (
     <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Header></Header>
              <Banner></Banner>
              <Nav></Nav>
            </Route>  
            <Route path="/food/:id">
              <Header></Header>
              <MenuDetails></MenuDetails>
            </Route>
          
          </Switch>
        </div>
    </Router>
  );
}

export default App;
