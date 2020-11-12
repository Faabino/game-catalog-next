import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const LayoutNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Link href="/" passHref>
        <Navbar.Brand>FLAM</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link href="/games" passHref>
          <Nav.Link>Games</Nav.Link>
        </Link>
        <Link href="/platforms" passHref>
          <Nav.Link>Platforms</Nav.Link>
        </Link>
        <Link href="#Login" passHref>
          <Nav.Link>Login</Nav.Link>
        </Link>
        <Link href="#Panier" passHref>
          <Nav.Link>Panier</Nav.Link>
        </Link>
      </Nav>
    </Navbar>
  );
};

export default LayoutNavbar;
