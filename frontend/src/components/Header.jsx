import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import dmwLogo from '/images/DMW-logo.svg'

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={dmwLogo} alt="DMW Logo" className="logo-img me-3" />
          <div className="logo-text">
            <div className="fw-bold fs-5">DMW Regional Office 1</div>
            <small className="text-light opacity-75">Department of Migrant Workers</small>
            <br />
            <small className="text-light opacity-75"><em>"Tahanan ng OFW sa Norte"</em></small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item-custom">Services</Nav.Link>
            <Nav.Link as={Link} to="/news" className="nav-item-custom">News</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header