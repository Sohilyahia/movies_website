import "./Header.css";
import logo from "../../assests/images/486-4868686_horror-movie-logo-for-ihorror-website-illustration.png";
// nav
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  const WatchList = document.getElementById("WatchList");
  const Watched = document.getElementById("Watched");
  const Search = document.getElementById("Search");
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand
            as={NavLink}
            to="/"
            className="navbar-brand"
            href="/"
            onClick={() => {
              WatchList.classList.remove("active");
              Watched.classList.remove("active");
              Search.classList.remove("active");
            }}
          >
            <img src={logo} alt="YIFY" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" href="/" aria-current="page">
                Home
              </Nav.Link>

              <Nav.Link
                id="WatchList"
                as={NavLink}
                to="./watchlist"
                href="#watchlist"
              >
                WatchList
              </Nav.Link>

              <Nav.Link
                id="hWatchedome"
                as={NavLink}
                to="./Watched"
                href="#Watched"
              >
                Watched
              </Nav.Link>
              <Nav.Link id="Search" as={NavLink} to="./Search" href="#Search">
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
