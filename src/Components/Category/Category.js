import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FaServer } from "react-icons/fa";
import { VscChromeClose, VscGlobe } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Category.scss";

function Category({}) {
  const [active, setActive] = useState(false);

  const categoriOne = [
    {
      id: 1,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 1",
      value: "",
    },
    {
      id: 2,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 2",
      value: "",
    },
    {
      id: 3,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 3",
      value: "",
    },
  ];
  const categoriTwo = [
    {
      id: 4,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 1",
      value: "",
    },
    {
      id: 5,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 2",
      value: "",
    },
    {
      id: 6,
      icon: <FaServer className="category__gridIcon" />,
      label: "Mobile Developer 3",
      value: "",
    },
  ];

  const categoriThree = [
    {
      id: 7,
      icon: <VscGlobe className="category__gridIcon" />,
      label: "Mobile Developer 1",
      value: "",
    },
    {
      id: 8,
      icon: <VscGlobe className="category__gridIcon" />,
      label: "Mobile Developer 2",
      value: "",
    },
  ];

  const hanldeChoose = () => {
    setActive(!active);
  };
  const project_variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={project_variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container className="category">
        <div className="category__header">
          <VscChromeClose className="category__headerIcon" />
          <h3>Choose your skills</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            laudantium.
          </p>
        </div>
        <div className="category__center">
          <div className="category__centerColumn">
            {categoriOne.map((item) => {
              return (
                <Card
                  onClick={hanldeChoose}
                  className={`category__container  ${active ? "active" : ""}  `}
                >
                  <div className="category__grid">
                    {item.icon}
                    <h4>{item.label}</h4>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="category__centerColumn">
            {categoriTwo.map((item) => {
              return (
                <Card
                  onClick={hanldeChoose}
                  className={`category__container  ${active ? "active" : ""}  `}
                >
                  <div className="category__grid">
                    {item.icon}
                    <h4>{item.label}</h4>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="category__centerColumn last">
            {categoriThree.map((item) => {
              return (
                <Card
                  onClick={hanldeChoose}
                  className={`category__container  ${active ? "active" : ""}  `}
                >
                  <div className="category__grid">
                    {item.icon}
                    <h4>{item.label}</h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        <Link to="/jobslist">
          <Button className="category__btn">Next</Button>
        </Link>
      </Container>
    </motion.div>
  );
}

export default Category;
