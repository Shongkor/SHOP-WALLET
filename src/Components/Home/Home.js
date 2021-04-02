import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
import './Home.css'

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5055/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="container">
            <div className="row justify-content-center">
                {
                    products.length === 0 && <div className="spinner"><Spinner></Spinner></div>
                }

                {
                    products.map(pd => <Product product={pd} key={pd._id}></Product>)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;