import React, { useState, useEffect } from 'react';
import './Nav.css';
import AllFoods from '../../FakeData/foods.json';
import FoodItem from '../FoodItem/FoodItem';

const Nav = () => {
    const[meals, setmeals] = useState([]);
    const [selectedMealType, setSelectedMealType] = useState("Lunch");
    useEffect(()=>{
        setmeals(AllFoods);
    },[]);
    const selectedMeals =  meals.filter(food => food.type === selectedMealType)
    return (
        <div className="meals-margin">
            <nav>
                <ul className="nav justify-content-center">
                    <li onClick={() => setSelectedMealType("Breakfast")}>
                        <span className={selectedMealType === "Breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span>
                    </li>
                    <li onClick={() => setSelectedMealType("Lunch")}>
                        <span className={selectedMealType === "Lunch" ?  "active nav-link" : "nav-link"}>Lunch</span>
                    </li>
                    <li onClick={() => setSelectedMealType("Dinner")}>
                        <span className={selectedMealType === "Dinner" ?  "active nav-link" : "nav-link"}>Dinner</span>
                    </li>
                </ul>
            </nav>
            <div className="row">
                    {
                        selectedMeals.map(food => <FoodItem food={food}></FoodItem>)
                    }
            </div>
            
        </div>
    );
};

export default Nav;