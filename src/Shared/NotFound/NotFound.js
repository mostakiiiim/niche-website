import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div>
                <img className="img-fluid" src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
                <Link to="/">
                    <button className="btn btn-dark">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;