import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    let cart = props.cart;
    let total = cart.reduce((total, course) => total + course.price,0);

    let discount = 0;
    if (total > 100){
        discount = 10;
    }
    let grandTotal = (total - discount).toFixed(2);
    return (
        
        <div className="card mb-3 text-center">
            <div className="card-header">
                <h4>Cart <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon></h4>
            </div>
            <div className="card-body">
                    <h5>Number of Courses: {cart.length}</h5>
                    <h5>Price: ${total.toFixed(2)}</h5>
                    <h5 className="text-danger">Discount: -${discount}</h5>
                    <hr/>
                    <div>
                        <h5 className="pt-3">Total Price: ${grandTotal}</h5>
                        <button className="btn btn-success float-right">Confirm Order</button>
                    </div>           
            </div>
        </div>
        
    );
};

export default Cart;