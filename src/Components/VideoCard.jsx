import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteSingleVideo } from '../services/allServices';


function VideoCard({video,updateDeleteStatus}) {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log("video data coming", video);

  const deleteVideo = async(videoId)=> {
    const response = await deleteSingleVideo(videoId);
    updateDeleteStatus();
    console.log("response", response);
  }
    
  return (
    <>
    { video &&
      <Card className='my-3' style={{height:'350px'}}>
      <Card.Img className='w-100' height='250px' style={{cursor:'pointer'}} variant="top" src={video?.url} onClick={handleShow}/>
      <Card.Body className='d-flex align-items-center justify-content-between'>
        <Card.Title className='mt-2 fs-6'>{video?.caption}</Card.Title>
        <Button variant="container" onClick={()=>deleteVideo(video?.id)}>
          <DeleteIcon/>
        </Button>
      </Card.Body>
    </Card>
}
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
          <iframe width={'100%'} height="200" src={`${video.embedlink}?autoplay=1&mute=1`} title="OK Kanmani - Mental Manadhil 8K/4K Video Song | A.R. Rahman | Dulquer Salmaan, Nithya Menon" frameborder="0" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard