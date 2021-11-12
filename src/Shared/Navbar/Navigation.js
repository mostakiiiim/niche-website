import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (

        <>
            <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Vasesthetic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-end">





                            <Nav.Link as={Link} to="/allProducts">All Products</Nav.Link>

                            {
                                user?.email ? <>
                                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>


                                    <button className="btn btn-danger ms-1" onClick={logOut}>Logout</button>
                                </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login/Sign Up</Nav.Link>
                            }

                            <Navbar.Text>
                                User: <span className="text-white fw-bold">{user?.displayName}</span>

                            </Navbar.Text>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Navigation;