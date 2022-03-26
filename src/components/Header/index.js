import React from 'react';
import HeaderLogo from '../../images/maveric-logo-updated.png'
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
export default function Header(){
    
    return(
        <Navbar bg="light" variant="dark"  className='text-center text-lg-center' >
        <Container>
          <Navbar.Brand href="#home" className='text-center' color='black'>
            <img
              alt=""
              src={HeaderLogo}
              width = "100"
              max-height = "100%"
              className="d-inline-block align-top"
            />
          <h4 style={{color:"black"}}>Maveric Connect</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
    }

