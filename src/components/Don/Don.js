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
            <div className=" bg-info shadow-lg">

            
            <figure class="text-center container p-2 w-50 mx-auto">
                <blockquote class="blockquote">
                    <p>We have all powerful Dons around the country. If you've the budget, your problem is ours. We do our work with money back gurranty.</p>
                </blockquote>
                <figcaption class="blockquote-footer"><cite title="Source Title">Dons Society of Bangladesh (DSB)</cite>
                </figcaption>
            </figure></div>
            <div className="row">
                <div className="col-4">
                    <Cart cart={cart}></Cart>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                {
                    don.map(don => <DonCard key={don.key} don={don} handleAddToCart={handleAddToCart}></DonCard>)
                }
                    </div>

                </div>
                
            </div>
        </>
    );
};

export default Don;