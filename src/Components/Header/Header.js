import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="jumbotron text-center">
            <div className="container">
                <h2 className="text-light my-5">Awesome Courses for <br></br>Awesome people</h2>
                <p className="text-light bg-info rounded p-2">$10 discount on orders over $100!!</p>
            </div>
        </div>
    );
};

export default Header;