import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';

export const NavBar = () => {
  return (
      <Navbar>
        <Container>
            <img src={logo} alt="Logo" />
        </Container>
      </Navbar>
  )
}