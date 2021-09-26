import React from 'react';
import './DonCard.css';

const DonCard = (props) => {
    const {img, name, nickname, price, currency, area} = props.don;
    return (
        <>
        <div className="col-lg-4 col-md-6 col.sm-12 g-4 ">
            <div className="card" stylename="width: 18rem;">
                <img src={img} className="card-img-top p-5 custom" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Name : {name}</h6>
                    <p className="card-text">Nickname : {nickname}</p>
                    <p className="card-text">Cost : ${price}</p>
                    <p className="card-text">Currency : {currency}</p>
                    <p className="card-text">Ruling Area : {area}</p>
                    <button onClick={()=>props.handleAddToCart(props.don)} className="btn btn-success"><i className="fas fa-plus mx-1"></i>Hire {name}</button>
                    
                    <div className="row mx-3 mt-2 custom-icon">
                        <div className="col mx-3">
                        <i className="fab fa-instagram-square insta"></i>
                        </div>
                        <div className="col mx-3">
                        <i className="fab fa-facebook-square fb"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
            
        </>
    );
};

export default DonCard;