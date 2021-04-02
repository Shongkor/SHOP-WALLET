import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ManageProduct from '../ManageProduct/ManageProduct';
import EditProduct from '../EditProduct/EditProduct';
import Home from '../Home/Home';
import AdminNavbar from '../AdminNavbar/AdminNavbar';




const Admin = () => {

    return (
        <div>
            <ManageProduct></ManageProduct>
        </div>

    );
};

export default Admin;