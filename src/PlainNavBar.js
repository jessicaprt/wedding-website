import React from 'react';
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
                |
                <NavItem eventKey={0} href="/info" className="pNavItem">
                    Info
                </NavItem>

            </Navbar.Brand>
        </Navbar.Header>
        </Navbar>
    </div>);
  }
}