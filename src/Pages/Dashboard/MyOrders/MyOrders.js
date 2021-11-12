import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    })
    const handleDelete = id => {

        const url = `http://localhost:5000/orders/${id}`

        fetch(url, {
            method: "DELETE"
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted?')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                }
            });

    }
    const myOrders = orders.filter(order => order.email === user.email)

    return (
        <div className="container">

            <h1 className="m-5 p-5">MY ORDERS</h1>
            <Table responsive className="mb-5">
                <thead>
                    <tr className="bg-dark text-white">
                        <th>Destination</th>

                        <th>Full Name</th>

                        <th>Email</th>

                        <th>Address</th>
                        <th>Phone Number</th>


                        <th>Price</th>

                        <th>Order Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order =>
                            <tr>
                                <td>{order.name} </td>

                                <td>{order.user} </td>

                                <td>{order.email} </td>

                                <td>{order.address} </td>
                                <td>{order.number} </td>

                                <td>{order.price} </td>

                                <td className="fw-bold">{order.status} </td>

                                <button className="bg-danger text-white" onClick={() => handleDelete(order._id)}>Cancel</button>
                            </tr>
                        )}
                </tbody>
            </Table>
            <div className="m-5">
                <h4 >
                    Total Orders ={myOrders.length}
                </h4></div>
        </div>
    );
};

export default MyOrders;