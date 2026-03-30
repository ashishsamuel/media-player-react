import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideos } from "../services/allServices";

function View({serverResponse}) {
  const [allVideos, setAllVideos] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const updateDeleteStatus = async()=> {
    setDeleteStatus(true);
  }

  useEffect(() => {
    setDeleteStatus(false);
    const fetchAllVideos = async () => {
      const response = await getAllVideos();
      setAllVideos(response?.data);
    };

    fetchAllVideos();
  }, [serverResponse,deleteStatus]);
  return (
    <>
      <Row>
        {allVideos?.length > 0 ?
          allVideos.map((video) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <VideoCard video={video} updateDeleteStatus={updateDeleteStatus}/>
            </Col>
          ))
        :<h3 className="text-danger my-3">Nothing to display</h3>
        }
      </Row>
    </>
  );
}

export default View;
