import React from 'react';

const Header = () => {
    return (
        <>
        <section>
            <nav className="navbar navbar-expand-lg navbar-light mb-4">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center col-6 col-lg-6" href="/logo">
                         <span className="span-default">Don</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#review">Reviews</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#subscribe">Subscribe</a>
                            </li>
                            <button className="btn btn-success ms-5"><i className="fas fa-sign-in-alt"> Login</i></button>
                            <button className="btn btn-warning ms-1">Sign In</button>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="bg-info shadow p-2">
        <h1 className="text-danger">Dons of Bangladesh</h1>
        <h1 className="text-danger ">Budget : $ 100M</h1>
            </div>
        </section>
        </>
    );
};

export default Header;