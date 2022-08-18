import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Nav1 extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home"><h1>ae-Care</h1></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <ul>
                                <Link to="/component/Main">Main</Link>
                            </ul>
                            <ul>
                                <Link to="/component/Weekly">Weekly</Link>  
                            </ul>
                            <ul>
                                <Link to="/component/Monthly">Monthly</Link>
                            </ul>
                            <ul>
                                <Link to="/component/Videos">Videos</Link>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Nav1;