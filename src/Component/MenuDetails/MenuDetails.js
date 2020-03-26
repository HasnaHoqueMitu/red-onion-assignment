import React from 'react';
import allFoods from '../../FakeData/foods.json';
import { useParams } from 'react-router-dom';

const MenuDetails = (props) => {
    const {id} = useParams();
    console.log(props);
    const currentFood = allFoods.find(food=> food.id == id);
    console.log(currentFood);
    
    return (
        <div className="container my-5 pt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.fullDescription}</p>
                    <div className="d-flex  my-4">
                        <h3>${currentFood.price}</h3>
                        <div>
                            <button>-</button>
                            as
                            <button>+</button>
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