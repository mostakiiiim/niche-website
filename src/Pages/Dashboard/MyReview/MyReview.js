import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import useAuth from '../../../hooks/useAuth';


const MyReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
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
    return (
        <div className="add-service">
            <h2 className="m-5">Give Us Feedback</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("user")} defaultValue={user.displayName} placeholder="name" />

                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("rating")} placeholder="Rating" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default MyReview;