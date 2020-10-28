import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./MyApp.scss";
function MyAppHeader() {
  return (
    <Container className="myApp">
      <div className="myApp__header">
        <h1>My Applications</h1>
        <div className="myApp__navbar">
          <Button>
            <Link to="/favorite">Favorite</Link>
          </Button>
          <Button>
            <Link to="/progress">In-Progress</Link>
          </Button>
        </div>
        <div className="myApp__body"></div>
      </div>
    </Container>
  );
}

export default MyAppHeader;
