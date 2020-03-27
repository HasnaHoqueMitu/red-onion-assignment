import React, { useState } from 'react';
import allFoods from '../../FakeData/foods.json';
import './MenuDetails.css'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const MenuDetails = (props) => {
    const {id} = useParams();
   // console.log(props);
    const currentFood = allFoods.find(food=> food.id == id);
   // console.log(currentFood);
   const[amount, setAmount]=useState(1);
   const [isSuccess, setIsSuccess] = useState(false);
   const [selectedBigImg, setSelectedBigImg] = useState(currentFood.images[0]);
   const finalCartHandler = (currentFood) => {
    currentFood.amount = amount;
    props.cartHandler(currentFood);
    setIsSuccess(true);
    }

    if(isSuccess){
        setTimeout(() => setIsSuccess(false),1500)
    }
    
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
                    <br/>
                    <div className="d-flex my-5">
                        <button className="btn btn-danger add-btn"
                        onClick={() => finalCartHandler(currentFood)}>
                            <FontAwesomeIcon icon={faCartArrowDown} />
                            Add
                        </button>
                        {
                            isSuccess &&
                            <p className="ml-3 success-mgs text-success">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                Item added to Cart
                            </p>
                        }
                    </div>
                    <div className="d-flex choose-food">
                        {
                            currentFood.images.map((img, index) => <img 
                            onClick={() => setSelectedBigImg(currentFood.images[index])}
                            src={img} alt=""
                            className={currentFood.images[index] === selectedBigImg ? "active-small-img w-50 shape-img" : "w-50 shape-img"}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="big-img" src={selectedBigImg} alt=""/>
                </div>          
            </div>
        </div>
    );
};

export default MenuDetails;