import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function LandingPage() {
  return (
    <>
    <Container>
      <Row>
        <Col lg={4}>
          <h3>Welcome to <span className='text-primary'>Media Player</span></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam sint optio at numquam perspiciatis distinctio, repellendus quisquam? Unde facere eveniet sapiente. Possimus, reiciendis dolorem. Expedita assumenda vel consectetur inventore?</p>
          <button className='btn btn-info rounded text-dark fw-bold'>Get Started</button>
        </Col>
        <Col lg={6}>
          <img className='border-dark rounded' src='/images/music-player.gif' alt='music player'/>
        </Col>
      </Row>
      </Container>
    </>
  )
}

export default LandingPage