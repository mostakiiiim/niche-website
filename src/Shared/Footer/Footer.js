import React from 'react';
const Footer = () => {
    return (
        <div>
            <div className="bg-dark footer  mt-5">
                <div className="bg-dark container mt-5">
                    <div className="row text-white pt-5  mt-5">
                        <div className="col-md-4 ">
                            <h1 className="border-bottom"><i className="far fa-hospital pe-4"></i>ORIBE</h1>
                            <p className="text-muted">
                                Best Glasses with Affordable Price
                            </p>
                            <i className="fab fa-facebook p-4 fs-2"> facebook</i>
                            <i className="fab fa-twitter p-4 fs-2"> Twitter</i>
                            <i className="fab fa-linkedin p-4 fs-2"> LinkeDin</i>
                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom"> <i className="far fa-building pe-1"></i> We Offer</h1>
                            <div className="text-muted">
                                <p >EYEGLASS</p>
                                <p>ANTI BLUE</p>
                                <p>POLARIZED</p>

                            </div>
                        </div>
                        <div className="col-md-4">
                            <h1 className="border-bottom"><i className="fas fa-phone-square-alt pe-4"></i>Contact Us</h1>
                            <div className="text-muted">
                                <h4>Malaysia,Kualalumpur </h4>
                                <p>145 Keryneias Avenue</p>
                                <p>Office 25</p>
                                <p>JB, Malcca</p>


                                <p>Phone: +357-22 041930</p>
                                <p> Fax: +357-22 250073</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;