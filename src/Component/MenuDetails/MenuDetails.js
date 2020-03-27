import React, { useState } from 'react';
import allFoods from '../../FakeData/foods.json';
import './MenuDetails.css'
import { useParams } from 'react-router-dom';

const MenuDetails = (props) => {
    const {id} = useParams();
   // console.log(props);
    const currentFood = allFoods.find(food=> food.id == id);
   // console.log(currentFood);
   const[amount, setAmount]=useState(1);
    
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.fullDescription}</p>
                    <div>
                        <div style={{float:"left",padding:"3px"}}>
                        <h3>${currentFood.price}</h3>
                        </div>
                        <div className="amount-controller">
                            <button className="btn" onClick={() => setAmount(amount <= 1? 1 : amount-1)}>-</button>
                            {amount}
                            <button className="btn" onClick={() => setAmount(amount >= 100? 100 : amount+1)}>+</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={currentFood.images} alt=""/>
                </div>          
            </div>
        </div>
    );
};

export default MenuDetails;