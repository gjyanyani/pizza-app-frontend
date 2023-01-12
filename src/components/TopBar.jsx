import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from 'react-icons/md';

const TopBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light"> &nbsp; &nbsp;
            <MdLocalOffer className="text-warning" />
            Free Delivery on order above 399/- rupees
            </h6>
          <Nav className="ms-auto">
              <LinkContainer to='/' activeClassName>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about' activeClassName>
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact' activeClassName>
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/policy' activeClassName>
                <Nav.Link>Terms and Conditions</Nav.Link>
              </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
