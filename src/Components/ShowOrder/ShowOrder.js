import React from 'react';

const ShowOrder = (props) => {
    console.log(props)
    const { email, image_URL, name, price, weight, orderTime } = props.order
    return (
        <div>
            <div className="col-md-3">
                <div className="card " style={{ width: "18rem" }}>
                    <img src={image_URL} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Date : {orderTime}</p>
                        <p className="card-text">Weight : {weight}gm</p>
                        <p className="card-text">Price : {price}$</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowOrder;