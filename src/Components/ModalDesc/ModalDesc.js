import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { MdPlace, MdFavoriteBorder } from "react-icons/md";
import Map from "../Map/Map";
import { ModalLogin } from "../ModalLogin/ModalLogin";

// import "leaflet/dist/leaflet.css";

import "./ModalDesc.scss";

export function ModalDescription({ company, title, location, desc, ...props }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  const [modalShow, setModalShow] = useState(false);

  return (
    <Modal
      className="modalDesc"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className="modalMap">
        <Map />
      </div>
      <Modal.Header className="modal__heading">
        <h5 className="modal__headingCompany">{company}</h5>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        <h5 className="modal__headingLocation">
          <MdPlace /> {location}
        </h5>
      </Modal.Header>
      <Modal.Body>
        <div className="modalDesc__header">
          <p>Description</p>
        </div>
        <div className="modalDesc__center">
          <h5>Overview</h5>
          <p>{truncate(desc, 300)}</p>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal__footer">
        <Button
          className="modal__footerBtnleft"
          onClick={() => setModalShow(true)}
        >
          <MdFavoriteBorder className="modal__footerBtnleft__icon" />
        </Button>
        <Button className="modal__footerBtnright" onClick={props.onHide}>
          Apply Now
        </Button>
      </Modal.Footer>
      <ModalLogin show={modalShow} onHide={() => setModalShow(false)} />
    </Modal>
  );
}

function ModalDesc() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ModalDescription show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default ModalDesc;
