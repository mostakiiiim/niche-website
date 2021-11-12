
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.username, history)
        e.preventDefault()
    }
    return (
        <div className="container">
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="text-center">Register </h4>
                        {
                            !isLoading &&
                            <Form onSubmit={handleLoginSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="name" name="username" placeholder="Enter username" onChange={handleOnChange} />

                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleOnChange} />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" placeholder="Password" onChange={handleOnChange} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" name="password2" placeholder="Re-enter Password" onChange={handleOnChange} />
                                </Form.Group>

                                <button variant="primary" className="w-100 bg-primary text-white" type="submit">
                                    Submit
                                </button>

                                <NavLink to="/login">
                                    Already Registered? Log in
                                </NavLink>
                            </Form>}
                        {
                            isLoading && <Spinner animation="grow" />
                        }
                        {
                            user?.email && <Alert variant="success">
                                User Created successfully
                            </Alert>
                        }
                        {
                            authError && <Alert variant="danger">
                                {authError}
                            </Alert>
                        }

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Register;