import React from 'react';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const CheckOut = () => {
    const { id } = useParams()
    const [selectedProduct, setselectedProduct] = useState({});

    useEffect(() => {
        fetch("http://localhost:5055/products")
            .then(res => res.json())
            .then(data => {
                const singleProduct = data.find(data => data._id === id);
                // console.log(singleProduct)
                // const newSelectedProduct = [...selectedProduct, singleProduct]
                setselectedProduct(singleProduct);
            })
    }, [])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)
    const info = { ...loggedInUser, ...selectedProduct, orderTime: new Date() }
    console.log(info)

    const handleCheckOut = () => {

        fetch("http://localhost:5055/checkout", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("your order placed successfully")
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="container mt-5 pt-3">
                <h3>Checkout</h3>
                <table className="table">
                    <thead id='thead' className="bg-light">
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>

                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>{selectedProduct.name}</td>
                            <td>1</td>
                            <td>{selectedProduct.price}</td>
                        </tr>
                    </tbody>
                </table>

                <button onClick={handleCheckOut} className='btn btn-success'>CheckOut</button>
            </div>
        </div>
    );
};

export default CheckOut;