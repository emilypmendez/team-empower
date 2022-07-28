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
                <a href="/" onClick={(e) => e.target.value}>
                  Home
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/community-boards/about-commmunity-boards.page" target="_blank">
                  About Community Boards
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/community-boards/brooklyn-boards.page" target="_blank">
                  All Brooklyn Boards
                </a>
              </li>
              <li>
                <a href="https://www1.nyc.gov/site/cau/connected/newsletter.page" target="_blank">
                  Stay Connected
                </a>
              </li>
            </ul>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              <a href="https://emilypmendez.github.io/" target="_blank">Team Empower</a>, made with
              data science for a better community
            </p>
          </nav>
        </Container>
      </footer>
    );
  }
}

export default Footer;
