import React from 'react';

const Cart = (props) => {
    // console.log(props.cart[0])
    const {cart} = props;
    let total = 0;
    for (const don of cart){
        total = total + don.price;
    }
    let donName = [];
    for (const don of cart){
        donName.push = don.name;
    }
    console.log(donName)
    return (
        <div className="sticky-top">
            <div className="col-12 my-5">
                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">Total Don : {cart.length}</li>
                    <li className="list-group-item">Total Money : ${total} </li>
                    <li className="list-group-item">Name : {donName[0]}</li>
                </ul>
            </div>
        </div>
    );
};

export default Cart;