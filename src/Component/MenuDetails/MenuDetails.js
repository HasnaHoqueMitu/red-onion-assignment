import React from 'react';
import allFoods from '../../FakeData/foods.json';
import { useParams } from 'react-router-dom';

const MenuDetails = (props) => {
    const {id} = useParams();
    console.log(props);
    const currentFood = allFoods.find(food=> food.id == id);
    console.log(currentFood);
    
    return (
        <div>
            <h1>{currentFood.name}</h1>
            <img src={currentFood.images} alt=""/>
            <p>{currentFood.id}</p>
            
        </div>
    );
};

export default MenuDetails;