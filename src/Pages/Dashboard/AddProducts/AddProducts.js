import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

import './AddProducts.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/products', data)
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
    return (
        <div className="add-service">
            <h2 className="m-5">Add a service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("name", { required: true, maxLength: 40 })} placeholder="name" />
                <input {...register("brand", { required: true, maxLength: 40 })} placeholder="brand-name" />

                <input type="number" {...register("price")} placeholder="price" />
                <input type="number" {...register("quantity")} placeholder="quantity" />
                <input {...register("img")} placeholder="image-url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;