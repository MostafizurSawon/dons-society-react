import React from 'react';
import './DonCard.css';

const DonCard = (props) => {
    const {img, name, nickname, price, currency, agent} = props.don;
    return (
        <>
        <div className="col-4 g-4">
            <div className="card" stylename="width: 18rem;">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Name : {name}</h6>
                    <p className="card-text">Nickname : {nickname}</p>
                    <p className="card-text">Cost : {price}</p>
                    <p className="card-text">Currency : {currency}</p>
                    <p className="card-text">Agent : {agent}</p>
                    <button onClick={()=>props.handleAddToCart(props.don)} className="btn btn-success">Hire {name}</button>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default DonCard;