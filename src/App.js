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
import Shipment from './Component/Shipment/Shipment';
import OrderComplete from './Component/OrderComplete/OrderComplete';
import { AuthProvider, PrivateRoute } from './Component/Login/useAuth';

function App() {
  const [cart,setCart] = useState([]);
  const [deliveryDetails , setDeliveryDetails] = useState({
    todoor:null,road:null, flat:null, businessname:null, address: null
  });
  const deliveryDetailsHandler = (data) => {
      setDeliveryDetails(data)
  }
  const clearCart = () => {
    setCart([])
  }
  const cartHandler = (data) => {
    const alreadyAdded = cart.find(crt => crt.id == data.id );
    const newCart = [...cart,data]
    setCart(newCart);
    if(alreadyAdded){
      const reamingCarts = cart.filter(crt => cart.id != data);
      setCart(reamingCarts);
    }else{
      const newCart = [...cart,data]
      setCart(newCart);
    }
   
  }
console.log(cart);

const checkOutItemHandler = (productId, productQuantity) => {
  const newCart = cart.map(item => {
    if(item.id == productId){
        item.amount = productQuantity;
    }
    return item;
  })

  const filteredCart = newCart.filter(item => item.amount > 0)
  setCart(filteredCart)
}
  return (
    <AuthProvider>
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
            <PrivateRoute path="/shipment">
                <Header cart={cart}></Header>
                <Shipment deliveryDetails={deliveryDetails} deliveryDetailsHandler={deliveryDetailsHandler} 
                cart={cart} clearCart={clearCart} checkOutItemHandler={checkOutItemHandler}></Shipment>
            </PrivateRoute>
            <Route path="/login">
                <Login></Login>
            </Route>
            <PrivateRoute path="/order-complete">
              <Header cart={cart}></Header>
              <OrderComplete deliveryDetails={deliveryDetails}></OrderComplete>
              
            </PrivateRoute>
            
          
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
