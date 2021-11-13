import React from 'react';

import { useForm } from 'react-hook-form';

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        fetch("https://cryptic-ravine-81087.herokuapp.com/users", {
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
        <div className="container">
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