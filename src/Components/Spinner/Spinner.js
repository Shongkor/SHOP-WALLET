import React from 'react';

const Spinner = () => {
    return (
        <div >
            <button className="btn btn-danger" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"> </span>
                    Loading...
            </button>
        </div>
    );
};

export default Spinner;