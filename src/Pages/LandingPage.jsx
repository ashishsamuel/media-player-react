import { Button } from "@mui/material";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigateByUrl = useNavigate();
  return (
    <>
      <Container style={{height:'500px'}} className="mt-5 d-flex justify-content-center flex-wrap">
        <Row className="mt-5 mx-5 align-items-center justify-content-between">
          <Col lg={5}>
            <h3>
              Welcome to <span className="text-info">Media Player</span>
            </h3>
            <p>
              Enjoy a seamless media experience with our powerful media player.
              Easily upload, organize, and play your favorite audio and video
              files in one place. With a user-friendly interface and smooth
              playback controls, managing your media has never been easier.
              Whether it's music, movies, or personal content, everything is
              just a click away.
            </p>
            <Button variant="contained" className="bg-info text-dark fw-bold" onClick={()=>navigateByUrl('/home')}>
              Get Started
            </Button>
          </Col>
          <Col lg={6} className="mx-1">
            <img
              width="450"
              height="250"
              className="border-dark rounded"
              src="/images/music-player.gif"
              alt="music player"
            />
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mx-5" style={{height:'600px'}}>
        <h3 className="text-center">Features</h3>
        <Row className="mt-5 align-items-center flex-wrap">
          <Col lg={4} className="text-center d-flex justify-content-center align-items-center">
            <Card style={{ width: "300px", height:"400px" }} className="border-dark rounded">
              <Card.Img variant="top" height="230px" src="/images/upload_video.gif" />
              <Card.Body>
                <Card.Title>Upload Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center d-flex justify-content-center align-items-center">
            <Card style={{ width: "300px", height:"400px" }} className="border-dark rounded">
              <Card.Img variant="top" height="230px" src="/images/play_video.gif" />
              <Card.Body>
                <Card.Title>Play Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} className="text-center d-flex justify-content-center align-items-center">
            <Card style={{ width: "300px", height:"400px" }} className="border-dark rounded">
              <Card.Img variant="top" height="230px" src="/images/drag_drop.gif" />
              <Card.Body>
                <Card.Title>Drag & Drop Videos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex my-5 p-2">
        <div className="d-flex flex-column justify-content-center flex-wrap">
          <h3>Simple, Fast and Powerful</h3>
          <div className="d-flex flex-column mt-4" style={{width:'700px'}}>
            <p>Upload your personal videos quickly and manage them in one place and watch videos directly within the application without interruptions.</p>
            <p>Track all the videos you have watched in real-time and create custom categories to organize your videos efficiently.</p>
            <p>Move videos between categories using intuitive drag-and-drop and experience a fast-loading and smooth user interface.</p>
         </div>
        </div>
        <div>
          <iframe width="600" height="400" src="https://www.youtube.com/embed/WOg4rHr1PyI?list=RDOIRWdkPMrh0" title="Aaromal Video Song - Sita Ramam (Malayalam) | Dulquer Salmaan | Mrunal | Vishal | Hanu Raghavapudi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Container>
    </>
  );
}

export default LandingPage;
