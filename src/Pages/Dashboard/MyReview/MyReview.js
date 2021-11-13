import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../../hooks/useAuth';
import './MyReview.css'


const MyReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {

        console.log(data);
        axios.post('https://cryptic-ravine-81087.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Added Successfully');

                    reset();
                }
            })
            .catch(error => {
                console.log(error.response)
            });
    }
    const pageContainer = {
        width: "100",
        overflow: "hidden"
    }

    return (
        <div className="add-service container" style={pageContainer}>
            <h2 className="m-5">Give Us Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input readOnly {...register("user")} defaultValue={user.displayName} placeholder="name" />

                <textarea className="ms-3 mb-4"  {...register("description")} placeholder="description" />
                <input type="number" {...register("rating", { min: 0, max: 5 })} placeholder="Rating" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default MyReview;