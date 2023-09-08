import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container,
} from 'reactstrap';
import "./nav.css";

function NavbarUser() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Navbar expand="sm">
                <NavbarBrand href="/">First__React</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="navbar-links" navbar>
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

export default NavbarUser;