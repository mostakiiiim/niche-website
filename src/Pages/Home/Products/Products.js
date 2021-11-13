
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Products = () => {
    const [products, setProducts] = useState([])
    const { isLoading, admin } = useAuth();

    useEffect(() => {
        fetch('https://cryptic-ravine-81087.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    return (<>

        <Container>
            <Row className="activities-div " id="srv">
                <h1 className="fw-bold mt-5">Trending Products</h1>
                <Row xs={1} md={3} className="g-4">
                    {

                        products.slice(0, 6).map(product =>
                            <Col>
                                <Card className="shadow-lg p-3 mb-5 bg-body rounded">
                                    <Card.Img variant="top" src={product.img} className="img-fluid" />
                                    <Card.Body>

                                        <Card.Text className="text-end">


                                            <h3 className="fw-bold"> {product.name}</h3>
                                            <p><h3 className="text-danger">${product.price}</h3></p>
                                            <p className="bg-light p-2"><span className="text-muted">Band</span> <br /> <span className="fw-bold fs-3"> {product.brand}</span>  </p>

                                            {admin ? <button className="btn btn-secondary btn-lg" disabled>Logged In as Admin</button> : <Link to={`/placeOrder/${product._id}`}><button className="btn btn-warning w-100">Buy Now</button></Link>}

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