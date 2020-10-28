import React from "react";
import { Container } from "react-bootstrap";

import "./MyApp.scss";
import MyAppFav from "./MyAppFav";
import MyAppHeader from "./MyAppHeader";

function MyApp() {
  return (
    <Container className="myApp">
      <MyAppHeader />
      <div className="myApp__body">
        <MyAppFav />
      </div>
    </Container>
  );
}

export default MyApp;
