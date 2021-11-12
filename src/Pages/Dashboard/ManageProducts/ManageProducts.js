import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    })
    const handleDelete = id => {

        const url = `http://localhost:5000/products/${id}`

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
    return (
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
    );
};

export default ManageProducts;