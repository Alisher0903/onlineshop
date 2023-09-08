import { Container } from "reactstrap";
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import "./nav.css"

function UserNav() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
             <Navbar expand="sm">
                <NavbarBrand href="/" className="fw-bolder fs-4">Product__Store</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-links ms-sm-5" navbar>
                        <NavItem className='navbar-link'>
                            <Link to="/category">Category</Link>
                        </NavItem>
                        <NavItem>
                            <NavLink>
                                <Link to="/product">Product</Link>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    );
}
export default UserNav;