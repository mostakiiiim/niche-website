
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';


const ManageOrders = () => {

    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    })



    //Order Update Section

    const handleUpdate = order => {
        const proceed = window.confirm("Are you sure to approve the Order?")
        if (proceed) {
            order.status = "Approved"
            const url = `http://localhost:5000/orders/${order._id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(order)
            })
                .then(res => res.json())
                .then(data => {

                    alert('Order is Updated')
                    const remaining = orders.map(orderNew => {
                        if (orderNew._id === orders._id) {
                            return orderNew
                        }
                        return orderNew;

                    })

                    setOrders(remaining);

                })
            return handleUpdate;

        }


    }


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

    return (

        <>
            <h1>Manage All Orders</h1>
            <Table responsive className="mb-5 container">
                <thead>
                    <tr>
                        <th>Package Name</th>
                        <th>Buyer Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Address</th>
                        <th>Price</th>
                        <th>Order Status</th>
                        <th className="ps-5">Admin Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id}>

                                <td>{order.name}</td>
                                <td>{order.user}</td>
                                <td>{order.email}</td>
                                <td>{order.number}</td>
                                <td>{order.address}</td>
                                <td>{order.price}</td>
                                <td className="fw-bold">{order.status}</td>

                                <button className="bg-danger text-white" onClick={() => handleDelete(order._id)}>cancel</button>

                                <td>
                                    {order?.status === "Approved" ?
                                        <span className="bg-success text-white ps-2 pe-2"> Updated Status</span> :
                                        <button onClick={() => handleUpdate(order)} className="btn bg-warning p-2">Approve?</button>}
                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </>
    );
};

export default ManageOrders;