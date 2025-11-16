import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import dmwLogo from '../assets/images/DMW-logo.svg'

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center flex-grow-1">
          <img src={dmwLogo} alt="DMW Logo" className="logo-img me-2 me-md-3" />
          <div className="logo-text">
            <div className="fw-bold fs-6 fs-md-5 fs-lg-4">Republic of the Philippines</div>
            <small className="text-light opacity-75 d-block">Department of Migrant Workers - Regional Office 1</small>
            <small className="text-light opacity-75 d-none d-md-block"><em>"Tahanan ng OFW sa Norte"</em></small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center text-lg-end">
            <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/news" className="nav-item-custom">News</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">Contact</Nav.Link>
          </Nav>
          <div className="navbar-time-bottom">
            <small>{currentTime.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at {currentTime.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })} GMT+8</small>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header