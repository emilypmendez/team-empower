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
/*eslint-disable*/
import React, { Component } from "react";

import { Dropdown, Badge, Button, Form } from "react-bootstrap";

import sideBarImage1 from "assets/img/sidebar-1.jpg";
import sideBarImage2 from "assets/img/sidebar-2.jpg";
import sideBarImage3 from "assets/img/sidebar-3.jpg";
import sideBarImage4 from "assets/img/sidebar-4.jpg";

function FixedPlugin({
  hasImage,
  setHasImage,
  color,
  setColor,
  image,
  setImage
}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     classes: "dropdown show-dropdown open",
  //     bg_checked: true,
  //     bgImage: this.props.bgImage,
  //   };
  // }
  // handleClick = () => {
  //   this.props.handleFixedClick();
  // };
  // onChangeClick = () => {
  //   this.props.handleHasImage(!this.state.bg_checked);
  //   this.setState({ bg_checked: !this.state.bg_checked });
  // };
  return (
    <div className="fixed-plugin">
      <Dropdown>
        <Dropdown.Toggle
          id="dropdown-fixed-plugin"
          variant=""
          className="text-white border-0 opacity-100"
        >
          <i className="fas fa-cogs fa-2x mt-1"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <li className="header-title pro-title text-center">
            Want more information?
          </li>
          <li className="button-container">
            <div>
              <Button
                block
                className="btn-fill"
                href="https://www1.nyc.gov/site/cau/about/about-cau.page"
                rel="noopener noreferrer"
                target="_blank"
                variant="primary"
              >
                Learn More at NYC.gov
              </Button>
            </div>
          </li>
          <li className="header-title" id="sharrreTitle">
            Thank you for reading!
          </li>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default FixedPlugin;
