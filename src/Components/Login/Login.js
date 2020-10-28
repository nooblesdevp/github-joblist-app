import React from "react";
import { Button, Container } from "react-bootstrap";
import { useStateValue } from "../../Provider";
import { auth, provider } from "../../firebase";

import "./Login.scss";
import { ACTIONS } from "../../reducer";
import { useHistory } from "react-router-dom";

function Login() {
  const [{}, dispatch] = useStateValue();
  const history = useHistory();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        console.log("res", res);
        const dataUser = {
          email: res.user.email,
          name: res.user.displayName,
          uid: res.user.uid,
          token: res.user.refreshToken,
          photo: res.user.photoURL,
        };
        dispatch({
          type: ACTIONS.SET_USER,
          payload: { user: dataUser },
        });
        history.push("/favorite");
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
