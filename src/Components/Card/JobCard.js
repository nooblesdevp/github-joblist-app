import React, { useState } from "react";
import { Card, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ModalDescription } from "../ModalDesc/ModalDesc";

import "./JobsCard.scss";

function JobCard({ job }) {
  const [modalShow, setModalShow] = useState(false);

  const randomImg = "https://via.placeholder.com/70";
  const imgLogo = job.company_logo;

  const addDefaultSrc = (e) => {
    e.target.src = randomImg;
  };

  return (
    // <Link to="/modal-description">
    <>
      <Card className="jobCard my-1" onClick={() => setModalShow(true)}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <img
              className="jobCard__img"
              src={imgLogo}
              alt=""
              onError={addDefaultSrc}
            />
            <div className="jobCard__info">
              <Card.Title>{job.title}</Card.Title>
              <div className="jobCard__infoDetail d-flex justify-content-between ">
                <Card.Subtitle>{job.company}</Card.Subtitle>
                <Card.Subtitle>
                  {new Date(job.created_at).toLocaleDateString()}
                </Card.Subtitle>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
      <ModalDescription
        company={job.company}
        title={job.title}
        location={job.location}
        desc={job.description}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* </Link> */}
    </>
  );
}

export default JobCard;
