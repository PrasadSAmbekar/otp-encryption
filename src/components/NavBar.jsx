import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import LoginPage from '../pages/Login';

function MyNavbar() {
    const [login, setLogin] = useState(false);
  return (
    <Navbar style={{ backgroundColor: '#284243', }} expand="sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ background: 'white' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-3">
            <Nav.Link href="/" style={{ fontSize: "18px", color: "white" }}>CryptOTP</Nav.Link>
            {/* <Nav.Link href="/" style={{ fontSize: "18px", color: "white" }}>Features</Nav.Link>
            <Nav.Link href="/" style={{ fontSize: "18px", color: "white" }}>Encrypted Storage</Nav.Link> */}
            {/* <Nav.Link href="/" style={{ fontSize: "18px", color: "white" }}>How it Works?</Nav.Link> */}

          </Nav>
            {/* <Nav.Link href="/" style={{ fontSize: "18px", color: "white" }} className='mx-3'>Home</Nav.Link> */}
            <Nav.Link style={{ fontSize: "18px", color: "white" }} href="/contact" className='mx-3'>CryptCaesar</Nav.Link>
            <Nav.Link style={{ fontSize: "18px", color: "white" }} href="/about" className='mx-3'>About Us</Nav.Link>

              <Button variant="light" className="mx-3" onClick={() => setLogin(true)}>
                Login
              </Button>

              <LoginPage
                show={login}
                onHide={() => setLogin(false)}
              />
        

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
