import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from "./../../../images/banner2.jpg"
import './Banner.css'
const Banner = () => {

    return (
        <div className="banner-content ">
            <div className="row">
                <div className="col-md-6 col-12 mt-5 d-flex justify-content-center align-contents-center align-items-center ">
                    <h1> Let's Explore  <br /> <span className="fw-bold">A BROAD RANGE OF TRENDY EYEWEAR</span> <br />
                        <Nav.Link as={Link} to="/allProducts">
                            <button className="btn btn-danger text-white mt-5 ">SHOP NOW</button>
                        </Nav.Link>


                    </h1>
                </div>
                <div className="col-md-6 col-12  mt-5 d-flex justify-content-center align-contents-center align-items-center ">
                    <img src={banner} alt="" className="img-fluid w-75" />
                </div>
            </div>

        </div>
    );
};

export default Banner;