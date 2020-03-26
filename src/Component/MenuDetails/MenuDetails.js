import React from 'react';
import AllFoods from '../../FakeData/foods.json';
import { useParams } from 'react-router-dom';

const MenuDetails = (props) => {
    const {id} = useParams();
    console.log(props);
    const currentFood = AllFoods.find(food =>food.id === props.id);
    console.log(currentFood);
    
    return (
        <div>
            {/* <h1>{currentFood.name}</h1>
            <p>{currentFood.id}</p> */}
            <p>don't know how to pass the value to menu details</p>
        </div>
    );
};

export default MenuDetails;