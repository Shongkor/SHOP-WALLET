import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'


const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

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
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/orders'>Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/admin'>Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/deals'>Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'><span className="signInColor">{loggedInUser.email ? loggedInUser.name : 'Sign In'}</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;