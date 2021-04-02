import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link to='/' className='navbar-brand'>SHOP-WALLET</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to='/manageProduct'>Manage Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/addProduct'>Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/edit'>Edit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AdminNavbar;