import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from './../../images/5f92b95a29e6ed0004c195ae.png'
const Navigation = () => {
    const { user, logOut } = useAuth();
    const myStyle = {
        filter: "brightness(0) invert(1)",
        width: "15%"
    }
    return (

        <>
            <Navbar className="p-3" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={logo} style={myStyle} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-end">





                            <Nav.Link as={Link} to="/allProducts">Explore</Nav.Link>

                            {
                                user?.email ? <>
                                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>


                                    <button className="btn btn-danger ms-1" onClick={logOut}>Logout</button>
                                    <Navbar.Text>
                                        User: <span className="text-white fw-bold">{user?.displayName}</span>

                                    </Navbar.Text>
                                </>
                                    :
                                    <Nav.Link as={Link} to="/login">Login/Sign Up</Nav.Link>
                            }


                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>

    );
};

export default Navigation;