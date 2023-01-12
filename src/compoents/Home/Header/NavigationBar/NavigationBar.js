import React, { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import brandLogo from "../../../../images/logos/logo.png";
import Button from "@mui/material/Button";
import "./NavigationBar.css";
import { Link } from "react-scroll";
import { useAuth } from "../../../../Contexts/AuthContext";
import { Link as ReactLink } from "react-router-dom";

function Navigationbar() {
  const { loggedInUser, logout } = useAuth();
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    loggedInUser &&
      fetch(`https://creative-agency-server-j90v.onrender.com/admin`)
        .then((res) => res.json())
        .then((data) => setAdmin(data));
  }, [loggedInUser]);

  let adminFilter =
    loggedInUser && admin.find((admin) => loggedInUser.email === admin.admin);
  return (
    <Navbar className="pt-3 nav" collapseOnSelect expand="lg" bg="transparent">
      <Container>
        <Navbar.Brand href="#home">
          <Image className="brand-logo" src={brandLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-black align-items-center">
            <Link className="pe-3 ps-3 links" to="header">
              Home
            </Link>
            <Link className="pe-3 ps-3 links" to="service">
              Services
            </Link>
            <Link className="pe-3 ps-3 links" to="portfolio">
              Our Portfolio
            </Link>
            <Link className="pe-3 ps-3 links" to="footer">
              Contact Us
            </Link>
            {adminFilter ? (
              adminFilter.admin === loggedInUser.email ? (
                <ReactLink className="pe-3 ps-3 links" to="/admin/services">
                  Admin
                </ReactLink>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            {loggedInUser ? (
              <Button onClick={logout} class="brand-button">
                Logout
              </Button>
            ) : (
              <ReactLink className="pe-3 ps-3 links" to="/login">
                <Button class="brand-button">Login</Button>
              </ReactLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
