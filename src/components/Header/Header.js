import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="px-5 mt-4 rounded-3 bg-success shadow-lg">       
                <figure className="text-center custom-text container p-2 mx-auto">
                    <blockquote className="blockquote">
                        <p>We have all powerful Dons around the country. If you've the budget, <br /> your problem is ours. We do our work with money back guarantee.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer custom-text"><cite title="Source Title">Dons Society of Bangladesh (DSB)</cite>
                    </figcaption>
                </figure>
                <h3 className="py-3 custom-text">Budget : $ 100M</h3>
            </div>
        </>
    );
};

export default Header;