import React, { useState } from "react";

import { Container } from "react-bootstrap";
import "./JobsList.scss";
import JobCard from "../Card/JobCard";
import useFatchData from "../useFatchData/useFatchData";
import InfiniteScroll from "react-infinite-scroll-component";
import CurveLoading from "../../assets/CurveLoading.gif";
import error from "../../assets/error.gif";
import SearchForm from "../SearchForm/SearchForm";
import { motion } from "framer-motion";

function JobsList() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFatchData(params, page);

  function handleParamChange(e) {
    const param = e.target.name;
    const value = e.target.value;
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
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
      <Container className="jobsList">
        <div className="header__top">
          <h2>Lastest Gigs </h2>
          <SearchForm params={params} onParamChange={handleParamChange} />
        </div>
        {/* {loading && <img src={CurveLoading} alt="" />}
      {error && <img src={error} alt="" />} */}
        <div className="jobList__gird">
          <InfiniteScroll
            dataLength={jobs.length}
            next={() => setPage(page + 1)}
            hasMore={true}
          >
            {jobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })}
          </InfiniteScroll>
        </div>
      </Container>
    </motion.div>
  );
}

export default JobsList;
