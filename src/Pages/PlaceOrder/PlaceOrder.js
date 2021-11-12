import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [products, setProduct] = useState({});
    const { user } = useAuth();
    const history = useHistory();
    const redirect_uri = '/dashboard/myOrders'
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [productId])

    const { register, handleSubmit, reset } = useForm({ defaultValues: { status: "Pending" } });
    const onSubmit = data => {

        console.log(data);
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    history.push(redirect_uri)
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>Review Order</h1>
            <h3>Package Name: <span className="fw-bold fs-1">{products.name}</span></h3>

            <div className="add-service">


                <form onSubmit={handleSubmit(onSubmit)}>

                    {products.name && <input readOnly={true} {...register("name")} defaultValue={products.name} placeholder="name" />}
                    <input {...register("user")} defaultValue={user.displayName} placeholder="name" />
                    <input  {...register("email")} defaultValue={user.email} />
                    <input {...register("address", { required: true })} placeholder="address" />
                    <input  {...register("number", { required: true })} placeholder="Phone Number" />
                    {products.price && <input readOnly={true} {...register("price")} defaultValue={products.price} />}
                    <input className="d-none" readOnly={true} {...register("status")} defaultValue="pending" />




                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};
export default PlaceOrder;