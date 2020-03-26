import React from 'react';
import './FoodItem.css';
import {Link} from 'react-router-dom';


const FoodItem = (props) => {
    const {id,name,shortDescription,price,images} = props.food;

    return (
        <div className="col-md-4">
          <Link to={"food/"+id}>
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
          </Link>
        </div>  
    );
};

export default FoodItem;