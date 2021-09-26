import React from 'react';
import CartName from '../Don/CartName/CartName';

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let total = 0;
    for (const don of cart){
        total = total + don.price;
    }
    return (
        <div className="sticky-top">
            <div className="col-lg-12 col-sm-12 my-5">
                <ul className="list-group">
                    <li className="list-group-item bg-success active" aria-current="true">Total Don : {cart.length}</li>
                    <li className="list-group-item">Total Money : ${total} </li>
                    <h4 className="my-2">Your Favorate Dons </h4>
                    <li>
                        {
                            cart.map(dName => <CartName dName={dName.name}></CartName>)
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;