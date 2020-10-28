import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Provider";

import "./ModalLogin.scss";

export function ModalLogin(props) {
  return (
    <Modal
      className="modalLogin"
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modalLogin__center">
        <Modal.Header className="ModalLogin__header">
          <Modal.Title id="contained-modal-title-vcenter">
            <h5> Please Login First</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className="modalLogin__footer">
          <Button className="modalLogin__footerBtnleft" onClick={props.onHide}>
            Cancel
          </Button>
          <Link to="/login">
            <Button className="modal__footerBtnright">Login</Button>
          </Link>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

function LoginNotif() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      {" "}
      <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default LoginNotif;
