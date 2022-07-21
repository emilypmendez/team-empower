/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer px-0 px-lg-3">
        <Container fluid>
          <nav>
            <ul className="footer-menu">
              <li>
                <a href="/" onClick={(e) => e.preventDefault()}>
                  Home
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/community-boards/about-commmunity-boards.page" onClick={(e) => e.preventDefault()}>
                  About Community Boards
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/community-boards/brooklyn-boards.page" onClick={(e) => e.preventDefault()}>
                  All Brooklyn Boards
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/connected/newsletter.page" onClick={(e) => e.preventDefault()}>
                  Stay Connected
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://emilypmendez.github.io/">Team Empower</a>, made with
              love for a better community
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
