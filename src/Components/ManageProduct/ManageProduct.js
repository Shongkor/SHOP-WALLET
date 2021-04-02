import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';





const ManageProduct = () => {
    let [allProduct, setAllProduct] = useState([])


    const loadAllProduct = () => {
        fetch('http://localhost:5055/products')
            .then(res => res.json())
            .then(data => {
                setAllProduct(data);
            })
    }
    if (allProduct.length === 0) {
        loadAllProduct();
    }


    const handleDelete = (id) => {

        fetch(`http://localhost:5055/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    loadAllProduct();
                }

            })
    }
    return (

        <div>
            <AdminNavbar></AdminNavbar>
            <h2 className="m-3">Manage Your Products</h2>
            <table className="table">
                <thead id='thead' className="bg-light">
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allProduct?.map(pd =>
                            <tr key={pd._id}>
                                <td>{pd.name}</td>
                                <td>{pd.weight}</td>
                                <td>{pd.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(`${pd._id}`)} className="p-3 btn btn-danger">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;