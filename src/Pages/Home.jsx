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
      <Row className="container-fluid align-items-center my-5 justify-content-center">
          <Col lg={9}><Add handleRes={handleRes} /></Col>
          <Col lg={2} className="d-flex justify-content-end"><Link
          style={{ textDecoration: "none", color: '#ffffff' }}
          className="fs-5"
          to={"/watch-history"}
        >
          Watch History
        </Link></Col>                  
      </Row>

      <Row className="container-fluid my-5 justify-content-center">
        <Col lg={8} className="allvideos">
          <h3 className="fs-5">All Videos</h3>
          <div className="videos">
            <View serverResponse={serverResponse} />
          </div>
        </Col>

        <Col lg={3} className="category">
          <Category />
        </Col>
      </Row>
    </>
  );
}

export default Home;
