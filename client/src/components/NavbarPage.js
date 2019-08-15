import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap"

export default class NavbarPage extends Component {
  render() {
    return (
        <Navbar bg ="light" expand ="lg">
          <Navbar.Brand href = "/">
            <img
              src = "goldenSwallow-logo.png"
              height= '30'
              alt="logo"
              />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products"> Products </Nav.Link>
          <Nav.Link href="about"> About </Nav.Link>
          <Nav.Link href="recipes"> Recipes </Nav.Link>
          <Nav.Link href="admin"> Admin </Nav.Link>
          </Nav>
        </Navbar>
    )
  }
}
