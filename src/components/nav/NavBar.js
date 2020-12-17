import React from "react"
import { Link } from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Button } from "react-bootstrap"
import Logo from "./WhatToDo.png"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
      <Navbar expand="md">
        <Navbar.Brand as={Link} to="/">
            <img className="navbar__logo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav container ">
          <Nav className="mr-auto container-fluid"> 
            {/* <Button variant="outline-primary" className="mx-2 my-1" onClick={() => props.history.push("/my-posts")}>My Posts</Button> */}
            <Button variant="outline-primary" className="mx-2 my-1" onClick={() => props.history.push("/task/create")}>Add Task</Button>
            <Button variant="outline-primary" className="mx-2 my-1" onClick={() => props.history.push("/tags")}>Tag Manager</Button>
            {/*<Button variant="outline-primary" className="mx-2 my-1" onClick={() => props.history.push("/profiles")}>Profiles</Button> */}
            <Button variant="outline-primary" className="mx-2 my-1 ml-md-auto" onClick={() => props.history.push("/logout")}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
