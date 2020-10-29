import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "./MyApp.scss";
function MyAppHeader() {
  return (
    <Container className="myApp">
      <div className="myApp__header">
        <h1>My Applications</h1>
        <div className="myApp__navbar">
          <NavLink to="/favorite" activeClassName="active">
            <>Favorite</>
          </NavLink>
          <NavLink to="/progress" activeClassName="active">
            <>In-Progress</>
          </NavLink>
        </div>
        <div className="myApp__body"></div>
      </div>
    </Container>
  );
}

export default MyAppHeader;
