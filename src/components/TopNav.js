import React from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'

function TopNav(props) {
  return (
    <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand tag={Link} to="/">Camera Shop</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
  )
}

export default TopNav