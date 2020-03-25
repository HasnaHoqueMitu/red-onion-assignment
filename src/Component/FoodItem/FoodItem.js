import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {
    const {id,name,shortDescription,price,images} = props.food;

    return (
        <div className="col-md-4">
          <div className="card">
            <div className="justify-content-center">
                <img className="w-100" src={images[0]} alt=""/>
            </div>
            <div className="card-body">
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <h4>${price}</h4>
            </div>
          </div>
        </div>  
    );
};

export default FoodItem;