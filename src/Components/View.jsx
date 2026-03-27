import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard';

function View() {
  return (
    <>
    <Row>
      <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard/>
      </Col>
    </Row>
      
    </>
  )
}

export default View