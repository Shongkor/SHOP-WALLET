import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import ShowOrder from '../ShowOrder/ShowOrder';
import './Order.css'

const Orders = () => {
    const [orderLists, setOrderLists] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    useEffect(() => {
        fetch("http://localhost:5055/orders")
            .then(res => res.json())
            .then(data => { 
                const myData = data.filter(d => d.email === loggedInUser.email)
                console.log('mydata:', myData)
                setOrderLists(myData)
            })
    }, [])
    return (
        <div>
            <Header></Header>
            <h3 className="name p-3">Hey,{loggedInUser.name}!</h3>
            <h3 className="p-1">Your Orders history </h3>
            <div className="row ml-2">
                

                {
                    orderLists.map(order => <ShowOrder order={order} key={order._id}></ShowOrder>)
                }
            </div>
        </div>
    );
};

export default Orders;