
import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(field, value);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    return (
        <div className="container">
            <Container fluid>
                <Row>
                    <Col>
                        <h4 className="text-center">Login</h4>
                        <Form onSubmit={handleLoginSubmit}>
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

                            <button variant="primary" className="w-100 bg-primary text-white" type="submit">
                                Submit
                            </button>
                            {
                                isLoading && <Spinner animation="grow" />
                            }
                            {
                                user?.email && <Alert variant="success">
                                    Logged in Successfully
                                </Alert>
                            }
                            {
                                authError && <Alert variant="danger">
                                    {authError}
                                </Alert>
                            }

                            <NavLink to="/register">
                                New user? Register now
                            </NavLink>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;