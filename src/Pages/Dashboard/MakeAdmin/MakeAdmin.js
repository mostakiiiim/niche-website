import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/users", {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(data => {
                console.log('hello world', data);
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    reset();
                }
            });


    };
    return (
        <div>
            <h1>Make me an admin</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    placeholder="Email"
                    type="email"

                    {...register("email", { required: true })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="make as Admin"
                />
            </form>
        </div>
    );
};

export default MakeAdmin;