import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Form, Modal } from "react-bootstrap";
import { uploadVideo } from "../services/allServices";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [video,setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedlink:""
  });

  const createEmbedLink = (e)=>{
    console.log("event value",e.target.value);
    const {value} = e.target;
    const embedLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
    setVideo({...video,embedlink:embedLink})
  }
  
  console.log("video data",video);

  const uploadVideoFunction = ()=> {
    uploadVideo(video);
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h3 className="mt-2 me-2">Upload New Video</h3>
        <Button onClick={handleShow} variant="contained">
          <AddCircleIcon />
        </Button>
      </div>

      {/* modal code */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload a Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form className="border p-3 rounded">
            <Form.Group className="mb-3" controlId="formVideoId">
              <Form.Control type="text" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVideoCaption">
              <Form.Control type="text" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVImageUrl">
              <Form.Control type="text" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formVideoLink">
              <Form.Control type="text" placeholder="Enter Youtube Video Link" onChange={createEmbedLink}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" className="text-dark fw-bold" onClick={uploadVideoFunction}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
