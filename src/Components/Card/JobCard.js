import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ModalDescription } from "../ModalDesc/ModalDesc";

import "./JobsCard.scss";

function JobCard({ job }) {
  const [modalShow, setModalShow] = useState(false);

  const randomImg = "https://via.placeholder.com/70";

  const addDefaultSrc = (e) => {
    e.target.src = randomImg;
  };

  return (
    <>
      <Card className="jobCard my-1" onClick={() => setModalShow(true)}>
        <Card.Body>
          <div className="d-flex justify-content-between">
            <img
              className="jobCard__img"
              src={job.company_logo}
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
    </>
  );
}

export default JobCard;
