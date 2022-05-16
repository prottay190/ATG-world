import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import headerLogo from '../../../images/whole.png';
import './Header.css';
import { FaSearch, FaCaretDown } from 'react-icons/fa'

const Header = () => {
    return (
        <Navbar className="header-container" bg="#fff" expand="lg">
        <Container fluid>
          <Navbar.Brand className='header-logo'>
           <img src={headerLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className='search-bar'>
             <FaSearch style={{fontSize:'16px', color: '#7A7A7A'}} /> 
             <input type="search" placeholder='Search your favorite groups in ATG' />
            </div>
          </Navbar.Collapse>
          <Nav
           className="me-auto my-2 my-lg-0"
           style={{ maxHeight: '100px' }}
           navbarScroll>
            <Nav.Link className='header-menu' href="#"><span style={{fontSize: '15px'}}>Create acount.<span style={{color:'#2F6CE5'}}>It's free</span> </span><FaCaretDown style={{color: '#2E2E2E', fontSize: '14px'}} /></Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;