import React, { useState } from "react";
import Add from "../Components/Add";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import View from "../Components/View";
import Category from "../Components/Category";

function Home() {
  const [serverResponse, setServerResponse] = useState({});
  const handleRes = (res) => {
    setServerResponse(res);
  };

  return (
    <>
      <div className="container title d-flex align-items-center justify-content-between mt-5 mb-5">
        <div className="add">
          <Add handleRes={handleRes} />
        </div>
        <Link
          style={{ textDecoration: "none" }}
          className="text-light fs-5"
          to={"/watch-history"}
        >
          Watch History
        </Link>
      </div>

      <Row className="container m-5 justify-content-between">
        <Col lg={8} className="allvideos">
          <h3>All Videos</h3>
          <div className="videos">
            <View serverResponse={serverResponse} />
          </div>
        </Col>
        <Col></Col>

        <Col lg={3} className="category">
          <Category />
        </Col>
      </Row>
    </>
  );
}

export default Home;
