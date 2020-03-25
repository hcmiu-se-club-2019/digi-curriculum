import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavDropdown, Nav} from "react-bootstrap";

import "./decoration.css";

class MajorNavbar extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        fixed="top"
        style={{ top: "0", position: "sticky" }}
        className="mr-auto"
      >
        <Navbar.Collapse>
          <NavDropdown className="major mr-auto" title="Information Technology">
            <NavDropdown.Item>Information Technology</NavDropdown.Item>
            <NavDropdown.Item>Business Administration</NavDropdown.Item>
            <NavDropdown.Item>Electrical Engineering</NavDropdown.Item>
          </NavDropdown>

          <Nav className="justify-content-end">
            <Nav.Link className="sub-major">Computer Science</Nav.Link>
            <Nav.Link className="sub-major">Network Engineering</Nav.Link>
            <Nav.Link className="sub-major border-bottom border-dark">
              Data Science
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MajorNavbar;
