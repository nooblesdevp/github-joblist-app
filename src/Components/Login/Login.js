import React from "react";
import { Button, Container } from "react-bootstrap";

import "./Login.scss";

function Login() {
  return (
    <Container className="login ">
      <img
        src="https://lh3.googleusercontent.com/6wXeJrI2mCvLDGlMzZVlcUkAecoopJYVoOeci3LOoWRuW_unD0XY-hblMZSgqpZ62Q"
        alt=""
      />
      <div className="login__btn">
        <h1>Sign in to Github JobsList</h1>
        <Button>Sign in With Google</Button>
      </div>
    </Container>
  );
}

export default Login;
