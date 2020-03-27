import React, { useState } from 'react';
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
import Login from './Component/Login/Login';

function App() {
  const [cart,setCart] = useState([]);
  const cartHandler = (data) => {
    const newCart = [...cart,data]
    setCart(newCart);
   
  }
console.log(cart);
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
              <MenuDetails cart={cart} cartHandler={cartHandler}></MenuDetails>
            </Route>
            <Route>
              <Login path="/login"></Login>
            </Route>
            
          
          </Switch>
        </div>
    </Router>
  );
}

export default App;
