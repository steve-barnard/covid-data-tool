import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar, .navbar-dark {
        background-color: #e3e3e3;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #000;

        &:hover {
            color: blue;
        }
    }
    
    .navbar-dark {
    }
`;

export const NavigationBar = () => (

    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Covid Data Tool</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id ="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/sources">Sources</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)