import React from 'react';
import './cartName.css';

const CartName = (props) => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item my-2 selected-dons">
                    <img className="image mx-3" src={props.img} alt="" />
                    {props.dName}
                 </li>
            </ul>
        </>
    );
};

export default CartName;