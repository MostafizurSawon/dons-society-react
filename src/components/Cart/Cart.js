import React from 'react';
import CartName from '../Don/CartName/CartName';

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    // const {daf} = props.cart[0]?.name;
    let total = 0;
    for (const don of cart){
        total = total + don.price;
    }
    // let donName = [];
    // for (const don of cart){
    //     donName.push = don.name;
    // }
    return (
        <div className="sticky-top">
            <div className="col-12 my-5">
                <ul className="list-group">
                    <li className="list-group-item active" aria-current="true">Total Don : {cart.length}</li>
                    <li className="list-group-item">Total Money : ${total} </li>
                    <li className="list-group-item">Total Money : ${total} </li>
                    {/* <li>
                        {
                            cart.filter(dName => <CartName dName={dName.name}></CartName>)
                        }
                    </li> */}
                    {/* <li className="list-group-item">Name : {props.don.name} </li> */}
                    {/* {
                        donName.forEach(dName => console.log(dName))
                    } */}
                </ul>
            </div>
        </div>
    );
};

export default Cart;