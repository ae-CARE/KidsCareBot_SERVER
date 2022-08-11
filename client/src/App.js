import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';


function App() {
  return (
    <div>
      {/*navbar*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><h1>ae-Care</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Mains">Main</Nav.Link>
              <Nav.Link href="#Weekly">Weekly</Nav.Link>
              <Nav.Link href="#Monthly">Monthly</Nav.Link>
              <Nav.Link href="#Videos">Videos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}



export default App;