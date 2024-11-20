import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useNavigate } from "react-router-dom";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate =useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 56) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleLoginBtn=()=>{
    navigate("login")
  }
  const handleSignupBtn=()=>{
    navigate("signup")
  }

  return (
    <Navbar expand="lg" className={`fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <Container>
        <NavLink className="navbar-brand" to="/">Quynh</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='user' className='nav-link'>User</NavLink>
            <NavLink to='admin' className='nav-link'>Admin</NavLink>
          </Nav>
          <Button className='btn btn-dark' onClick={handleSignupBtn}>Sign up</Button>
          <Button className='btn btn-light'onClick={handleLoginBtn}>Log in</Button>

          <Nav>
            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Log in</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Log out</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default Header;