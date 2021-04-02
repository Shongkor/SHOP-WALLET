import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {

    const { name, weight, price, image_URL, _id } = props.product


    return (
       
        <div className="col-lg-3 col-md-6">
            <div className="card" style={{ width: "15rem" }}>
                <img src={image_URL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{weight} gm</p>
                    <p className="card-text">{price} $</p>
                    <Link to={`/checkout/${_id}`}><button className="btn btn-primary"><FontAwesomeIcon icon={faCartPlus} /> Buy now</button></Link>
                </div>
            </div>
        </div>
        
    );
};

export default Product;