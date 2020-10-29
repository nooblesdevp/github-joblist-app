import React from "react";
import MyAppHeader from "./MyAppHeader";
import { motion } from "framer-motion";

function MyAppProgress() {
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
    <>
      <MyAppHeader />
      <motion.div
        className="container projects"
        variants={project_variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h1>ini progress</h1>
      </motion.div>
    </>
  );
}

export default MyAppProgress;
