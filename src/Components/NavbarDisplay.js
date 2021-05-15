import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavbarDisplay () {
    //visible on every page
    return (
        <Navbar fixed="top" bg="light" variant="light" expand="lg">
            <LinkContainer to="/">  
                <Navbar.Brand href="#home">Menu of Sanity</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add">
                        <Nav.Link>Add</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/ideas">
                        <Nav.Link>Ideas</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}