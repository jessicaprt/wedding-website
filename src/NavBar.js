import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export class NavBar extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="navLine"></div>
        <Navbar inverse collapseOnSelect
          className="mainNav">
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#our-wedding" className="navItem">
                OUR WEDDING
              </NavItem>
              <NavItem eventKey={2} href="#rsvp" className="navItem">
                RSVP
              </NavItem>
              <NavItem eventKey={3} href="#registry" className="navItem">
                REGISTRY
              </NavItem>
              <NavItem eventKey={4} href="#accommodation" className="navItem">
                ACCOMMODATION
              </NavItem>
              <NavItem eventKey={5} href="#contact" className="navItem">
                CONTACT INFO
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navLine"></div>
    </div>);
  }
}