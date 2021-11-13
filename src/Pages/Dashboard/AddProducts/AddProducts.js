import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        console.log(data);
        axios.post('https://cryptic-ravine-81087.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');

                    reset();
                }
            })
            .catch(error => {
                console.log(error.response)
            });

    }
    const pageContainer = {
        width: "100",
        overflow: "hidden",

    }
    return (
        <div className="add-service container" style={pageContainer}>
            <h2 className="m-5 text-center">Add a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 40 })} placeholder="name" />
                <input {...register("brand", { required: true, maxLength: 40 })} placeholder="brand-name" />


                <textarea className="ms-3 mb-4" {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input type="number" {...register("quantity")} placeholder="quantity" />
                <input {...register("img")} placeholder="image-url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;