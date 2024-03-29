import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarHome = () => {
    return (
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='web-name'><img src="/Logo.png" className='logo-class' alt="no" srcset="" />Padoc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className="weight" href="#link" >Link</Nav.Link>
            <Nav.Link className="weight" href="#log-in">Log In</Nav.Link>
            <Nav.Link className="weight" href="#sign-in">Sign In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    );
}
 
export default NavbarHome;