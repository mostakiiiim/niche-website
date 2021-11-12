
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Products = () => {
    const [products, setProducts] = useState([])
    const { isLoading, admin } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    return (<>

        <Container>
            <Row className="activities-div " id="srv">
                <h1 className="fw-bold mt-5">Our Packages</h1>
                <Row xs={1} md={3} className="g-4">
                    {

                        products.map(product =>
                            <Col>
                                <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                                    <Card.Img variant="top" src={product.img} className="img-fluid" />
                                    <Card.Body>

                                        <Card.Text className="text-start">


                                            <h3 className="fw-bold"> {product.name}</h3>
                                            <p><h3 className="text-danger">${product.price}</h3><span className="text-muted">/per person</span></p>
                                            <p className="bg-light p-2 text-muted">Brand  {product.brand}, </p>

                                            {admin ? <button className="btn btn-secondary btn-lg" disabled>Book Now</button> : <Link to={`/placeOrder/${product._id}`}><button className="btn btn-warning w-100">Book Now</button></Link>}

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )

                    }



                </Row>
            </Row>
        </Container>
    </>



    );
};

export default Products;