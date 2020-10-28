import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import { useStateValue } from "../../Provider";
import { VscSettings } from "react-icons/vsc";
import "./JobsList.scss";
import axios from "axios";
import { ACTIONS } from "../../reducer";
import JobCard from "../Card/JobCard";
import useFatchData from "../useFatchData/useFatchData";
import InfiniteScroll from "react-infinite-scroll-component";
import CurveLoading from "../../assets/CurveLoading.gif";
import error from "../../assets/error.gif";

function JobsList() {
  // const [{ jobs }, dispatch] = useStateValue();
  // const [{ jobs, loading, error }, dispatch] = useStateValue();

  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = useFatchData(params, page);

  return (
    <Container className="jobsList">
      <div className="header__top">
        <h2>Lastest Gigs </h2>
        <div className="header__inputContainer">
          <InputGroup className="header__input mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                <BsSearch />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className="header__inputSearch"
              placeholder="search"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Button className="header__btn" type="submit">
            <VscSettings className="header__btnIcon" />
          </Button>
        </div>
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
  );
}

export default JobsList;
