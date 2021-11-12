import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    return (
        <>

            <Container>
                <Row className="activities-div " id="srv">
                    <h1 className="fw-bold mt-5">Our Packages</h1>
                    <Row xs={1} md={3} className="g-4">
                        {

                            reviews.map(review =>
                                <Col>
                                    <Card className="shadow-lg p-3 mb-5 bg-body rounded">

                                        <Card.Body>

                                            <Card.Text className="text-start">


                                                <h3 className="fw-bold"> {review.user}</h3>
                                                <h3 className="fw-bold"> {review.description}</h3>
                                                <Rating
                                                    emptySymbol="far fa-star"
                                                    fullSymbol="fas fa-star "
                                                    initialRating={review.rating}

                                                />

                                                <h3 className="fw-bold"> {review.rating}</h3>





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

export default Reviews;