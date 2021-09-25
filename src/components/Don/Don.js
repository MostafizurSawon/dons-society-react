import React, { useState, useEffect } from 'react';
import Cart from '../Cart/Cart';
import DonCard from '../DonCard/DonCard';
import './Don.css';

const Don = () => {
    const [don, setDon] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setDon(data))
    } ,[])

    const handleAddToCart = don => {
        // console.log('clicked')
        const newCart = [...cart, don];
        setCart(newCart);
    }
    return (
        <>
            <h1>Hello Dons</h1>
            <div className="row">
                <div className="col-8">
                    <h2>Total Dons : {don.length}</h2>
                    <div className="row">
                {
                    don.map(don => <DonCard key={don.key} don={don} handleAddToCart={handleAddToCart}></DonCard>)
                }
                    </div>

                </div>
                <div className="col-4">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Don;