import React from "react";
import { Button, Container } from "react-bootstrap";
import { useStateValue } from "../../Provider";
import { auth, provider } from "../../firebase";

import "./Login.scss";
import { ACTIONS } from "../../reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("res", res);
        dispatch({
          type: ACTIONS.SET_USER,
          payload: { user: res.user },
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container className="login ">
      <img
        src="https://lh3.googleusercontent.com/6wXeJrI2mCvLDGlMzZVlcUkAecoopJYVoOeci3LOoWRuW_unD0XY-hblMZSgqpZ62Q"
        alt=""
      />
      <div className="login__btn">
        <h1>Sign in to Github JobsList</h1>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </Container>
  );
}

export default Login;
