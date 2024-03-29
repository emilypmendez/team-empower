import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";

import routes from "routes.js";

function Header() {
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          <Navbar.Brand
            href="#home"
            onClick={(e) => e.preventDefault()}
            className="mr-2"
          >
            {getBrandText()}
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav mr-auto" navbar>
            <Nav.Item>
              <Nav.Link
                data-toggle="dropdown"
                href="/"
                onClick={(e) => e.preventDefault()}
                className="m-0"
              >
                <span className="d-lg-none ml-1">Dashboard</span>
              </Nav.Link>
            </Nav.Item>


            {/* LEFT-HAND NAV */}
            {/* <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="nc-icon nc-zoom-split"></i>
                <span className="d-lg-block"> Search</span>
              </Nav.Link>
            </Nav.Item>  */}
          </Nav>


          {/* RIGHT-HAND NAV */}
          <Nav className="ml-auto" navbar>
            {/* <Nav.Item>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  as={Nav.Link}
                  data-toggle="dropdown"
                  id="dropdown-67443507"
                  variant="default"
                  className="m-0"
                >
                  <i className="nc-icon nc-planet"></i>
                  <span className="notification">5</span>
                  <span className="d-lg-none ml-1">Notification</span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification 1
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification 2
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification 3
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Notification 4
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another notification
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item> */}

            {/* RIGHT-HAND NAV */}
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle
                aria-expanded={false}
                aria-haspopup={true}
                as={Nav.Link}
                data-toggle="dropdown"
                id="navbarDropdownMenuLink"
                variant="default"
                className="m-0"
              >
                <span className="no-icon">Read more information about Community Boards</span>
              </Dropdown.Toggle>
              <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                <Dropdown.Item
                  href="https://www.ibo.nyc.ny.us/budgetbasics.html"
                  target="_blank"
                >
                  Learn About Budget Basics
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://communityprofiles.planning.nyc.gov/"
                  target="_blank"
                >
                  More on NYC Community District Profiles
                </Dropdown.Item>

                <div className="divider"></div>

                <Dropdown.Item
                  href="https://www1.nyc.gov/site/brooklyncb4/about/join-our-email-list.page"
                  target="_blank"
                >
                  Sign Up for the CB4 Newsletter
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.cb14brooklyn.com/about/cb14-newsletter/"
                  target="_blank"
                >
                  Sign Up for the CB14 Newsletter
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* {/* LOGOUT FEATURE * / }
            <Nav.Item>
                <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="no-icon">Log out</span>
              </Nav.Link>
            </Nav.Item> */}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
