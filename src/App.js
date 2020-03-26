import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Component/Header/Header';
import Banner from './Component/Banner/Banner';
import Nav from './Component/Nav/Nav';

function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/">
          <Header></Header>
          <Banner></Banner>
          <Nav></Nav>
        </Route>  
        <Route path="/food/:id">
          <Header></Header>
          
        </Route>
        
      </switch>
    </Router>
  );
}

export default App;
