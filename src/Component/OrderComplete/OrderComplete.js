import React from 'react';
import MapImg from '../../images/map.png';
import Rider from '../../images/biker.png';
import RiderHalmet from '../../images/helmet.png';
const OrderComplete = (props) => {
    return (
        <div className="container  my-5">
            <div className="row">
                <div className="col-md-8">
                    <img className="img-fluid" src={MapImg} alt=""/>
                </div>
                <div className="col-md-4 pl-md-5">
                    <div className="bg-light p-3 rounded">
                        <img width="25%" src={Rider} alt=""/>
                        <div className="bg-white  rounded p-3 my-3">
                            <div>
                                <h5>Your Location</h5>
                                <p>{props.deliveryDetails.flat}, {props.deliveryDetails.road}</p>
                            </div>
                            <div>
                                <h5>Shop Address</h5>
                                <p>Star Kabab and Restaura</p>
                            </div>
                        </div>
                        <h1>09:00</h1>
                        <p>Estimated Delivery</p>

                        <div className="bg-white d-flex sizing">
                            <img style={{paddingLeft:"10px", width:"75%"}} src={RiderHalmet} alt=""/>
                            <div>
                                <h6>Hamim</h6>
                                <p>Your Rider</p>
                            </div>
                        </div>

                        <button className="btn btn-block my-3 btn-danger">Contact</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderComplete;