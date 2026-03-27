import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';


function VideoCard() {
  const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card >
      <Card.Img className='w-100' style={{cursor:'pointer'}} variant="top" src="/images/mental_manadhil.jpg" onClick={handleShow}/>
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Title className='mt-2 fs-6'>Video Caption</Card.Title>
        <Button variant="container">
          <DeleteIcon/>
        </Button>
      </Card.Body>
    </Card>

    {/* modal code */}
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={'100%'} height="200" src="https://www.youtube.com/embed/QUDYpdFzwQQ?list=RDQUDYpdFzwQQ&autoplay=1&mute=1" title="OK Kanmani - Mental Manadhil 8K/4K Video Song | A.R. Rahman | Dulquer Salmaan, Nithya Menon" frameborder="0" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard