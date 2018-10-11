import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export class PlainNavBar extends React.Component {
  render() {
    return (
      <div className="PlainNav">
        <div className="navLine"></div>
        <Navbar inverse collapseOnSelect
          className="mainNav">
          <Navbar.Header>
            <Navbar.Brand>
                <NavItem eventKey={0} href="/" className="pNavItem">
                    George &amp; Jessica
                </NavItem>
            </Navbar.Brand>
        </Navbar.Header>
        </Navbar>
    </div>);
  }
}