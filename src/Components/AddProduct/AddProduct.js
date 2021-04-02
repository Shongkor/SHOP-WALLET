import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const [imageURL, setImageURL] = useState('')

    const onSubmit = data => {
        const productData = {
            name: data.productName,
            weight: data.weight,
            price: data.price,
            image_URL: imageURL,
        }
        console.log(productData)
        fetch('http://localhost:5055/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => {
                console.log('server side response: ', res)
                if (data) {
                    alert("your Product Added successfully")
                }
            })
    };


    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '6dae70b2793c5ebb565964724f8b578d')
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="p-3">Add product
                        </h1>
                        <div className="row inputContainer mb-4">
                        
                            <div className="col-md-6">
                                <label htmlFor=""><strong>Product Name:</strong></label>
                                <br />
                                <input className="input" placeholder="Enter Product Name" name="productName" type='text' ref={register} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor=""><strong>Weight:</strong></label>
                                <br />
                                <input className="input" placeholder="Enter weight" name="weight" type='number' ref={register} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor=""><strong>Price:</strong></label>
                                <br />
                                <input className="input" placeholder="Enter Price here" name="price" type='number' ref={register} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor=""><strong>Add Photo:</strong></label>
                                <br />
                                <input name="photo_URL" type='file' ref={register} onChange={handleImageUpload} />
                            </div>
                        </div>
                        <input type="submit" className='btn btn-primary' />
                </form>

            </div>
        </div>

    );
};

export default AddProduct;