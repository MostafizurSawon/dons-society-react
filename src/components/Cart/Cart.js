import React from 'react';
import CartName from '../Don/CartName/CartName';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for (const don of cart){
        total = total + don.price;
    }
    return (
        <div className="sticky-top">
            <div className="col-lg-12 col-sm-12 my-5 shadow-lg">
                <ul className="list-group">
                    <li className="list-group-item bg-success" aria-current="true">
                    <i className="fas fa-user-secret mx-2"></i>
                        <span style={{color: "white"}} className=""> Total Don : {cart.length}</span></li>
                    <li className="list-group-item">Total Money : <i className="fas fa-dollar-sign"></i>{total} </li>
                    <h4 className="my-2">Your Favourite Dons </h4>
                    <li>
                        {
                            cart.map(dName => <CartName key={dName.key} dName={dName.name} img={dName.img}></CartName>)
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;