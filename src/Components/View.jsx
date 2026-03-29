import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/allServices";

function View() {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    const fetchAllVideos = async () => {
      const response = await getAllVideos();
      console.log("response from fetch all videos api", response);
      setAllVideos(response?.data);
    };

    fetchAllVideos();
  }, [allVideos]);
  return (
    <>
      <Row>
        {allVideos?.length > 0 ?
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard video={video}/>
            </Col>
          ))
        :<h3>Nothing to display</h3>
        }
      </Row>
    </>
  );
}

export default View;
