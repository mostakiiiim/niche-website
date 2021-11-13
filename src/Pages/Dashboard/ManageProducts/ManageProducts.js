import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const { isLoading } = useAuth();

    useEffect(() => {
        fetch('https://cryptic-ravine-81087.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    })
    const handleDelete = id => {

        const url = `https://cryptic-ravine-81087.herokuapp.com/products/${id}`

        fetch(url, {
            method: "DELETE"
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted?')
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining);
                }
            });

    }

    const pageContainer = {
        width: "100",
        overflowX: "hidden"
    }
    if (isLoading) {
        return <Spinner animation="grow" className="mt-5" />
    }
    return (
        <div className="container " style={pageContainer}>
            <h1>Manage Products</h1>
            <Table responsive className="mb-5 container">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>

                        <th>Admin Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr key={product._id}>

                                <td><img src={product.img} style={{ width: 70 }} alt="" /></td>
                                <td>{product.name}</td>
                                <td>{product.brand}</td>
                                <td>{product.price} $</td>
                                <td>{product.quantity}</td>



                                <button className="bg-danger text-white" onClick={() => handleDelete(product._id)}>cancel</button>


                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;