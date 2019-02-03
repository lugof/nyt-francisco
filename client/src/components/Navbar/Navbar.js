import React from "react";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Google Books</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Search</Link>
                    <Link to="/saved" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>Saved</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar;