import React from 'react';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Questions from './Questions/Questions';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Questions></Questions>
        </div>
    );
};

export default Home;