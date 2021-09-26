import React from 'react';

const CartName = (props) => {
    console.log(props.dDame);
    return (
        <div>
            <li className="list-group-item">{props.dName} </li>
        </div>
    );
};

export default CartName;