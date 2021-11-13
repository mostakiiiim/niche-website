import React, { useEffect, useState } from 'react';
import { Carousel, Container, ProgressBar, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';

import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://cryptic-ravine-81087.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    const reviewBg = {
        backgroundColor: "#F0F8FF"
    }
    return (
        <>

            <Container>

                <h1 className="text-center">What clients say about us</h1>
                <Carousel variant="dark">


                    {

                        reviews.map(review =>
                            <Carousel.Item key={review._id} interval={3000} >
                                <div className="text-center m-5 p-5 " style={reviewBg}>

                                    <Rating
                                        emptySymbol="far fa-star fs-4"
                                        fullSymbol="fas fa-star text-warning fs-4"
                                        initialRating={review.rating}

                                    />
                                    <h3 className="fw-bold"><span className="text-secondary fs-5">Client Name:</span> <span className="text-info">{review.user}</span> </h3>
                                    <p className="fw-bold fs-1"> "{review.description}"</p>



                                </div>

                            </Carousel.Item>

                        )

                    }






                </Carousel>
                <>
                    <div className="container">
                        <div className="row m-5 pt-3">
                            <div className="col-md-6 d-flex flex-column justify-content-center fw-bold">
                                <h1>Happy Customers</h1>
                                <h1>99.6% </h1><span>Positive Reviews</span>
                            </div>
                            <div className="col-md-6">

                                <span className="fw-bold ">Excellent</span><ProgressBar animated now={70} /><br />
                                <span className="fw-bold ">Very Good</span><ProgressBar animated now={75} /><br />
                                <span className="fw-bold ">Good</span><ProgressBar animated now={40} /><br />
                                <span className="fw-bold ">Poor</span> <ProgressBar animated now={10} /><br />
                                <span className="fw-bold ">Bad</span> <ProgressBar animated now={5} />

                            </div>
                        </div>
                    </div></>
            </Container>
        </>
    );
};


export default Reviews;