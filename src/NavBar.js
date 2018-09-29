import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export class NavBar extends React.Component {
  render() {
    const pages = [
      ['OUR WEDDING', 'wedding'], 
      ['RSVP', 'rsvp'], 
      ['REGISTRY', 'registry'],
      ['ACCOMODATION', 'accomodation'] ];

    const navLinks = pages.map(page => {
      return (
        <div key={page[1]}>
          <a href={'#' + page[1]} className="navItems">
            {page[0]}
          </a>
        </div>
      )
    });

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
              <NavItem eventKey={1} href="#" className="navItem">
                OUR WEDDING
              </NavItem>
              <NavItem eventKey={2} href="#" className="navItem">
                RSVP
              </NavItem>
              <NavItem eventKey={3} href="#" className="navItem">
                REGISTRY
              </NavItem>
              <NavItem eventKey={4} href="#" className="navItem">
                ACCOMODATION
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="navLine"></div>
    </div>);
  }
}