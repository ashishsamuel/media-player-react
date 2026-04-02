import React, { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  deleteSingleVideo,
  getSingleVideo,
  postWatchHistory,
} from "../services/allServices";
import { toast } from "react-toastify";

function VideoCard({ video, updateDeleteStatus }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteVideo = async (videoId) => {
    const response = await deleteSingleVideo(videoId);
    if (response?.status >= 200 && response?.status <= 300) {
      toast.success("Video has been deleted succesfully");
      updateDeleteStatus();
    }
  };

  const openVideo = async (video) => {
    const response = await getSingleVideo(video.id);
    if (response.status >= 200 && response.status < 300) {
      handleShow();

      await postWatchHistory({
        caption: video.caption,
        videoUrl: video.embedlink,
        timeStamp: new Date().toLocaleDateString(),
      });
    }
  };

  const dragStart = (e, videoId) => {
    // console.log("drag event started",videoId);
    e.dataTransfer.setData("videoId", videoId);
  };

  return (
    <>
      {video && (
        <Card
          className="my-3"
          style={{ height: "350px" }}
          onDragStart={(e) => dragStart(e, video?.id)}
          draggable
        >
          <Card.Img
            className="w-100"
            height="250px"
            style={{ cursor: "pointer" }}
            variant="top"
            src={video?.url}
            onClick={() => openVideo(video)}
          />
          <Card.Body className="d-flex align-items-center justify-content-between">
            <Card.Title className="mt-2 fs-6">{video?.caption}</Card.Title>
            <Button variant="container" onClick={() => deleteVideo(video?.id)}>
              <DeleteIcon />
            </Button>
          </Card.Body>
        </Card>
      )}
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
          <iframe
            width={"100%"}
            height="200"
            src={`${video.embedlink}?autoplay=1&mute=1`}
            title={video.caption}
            frameborder="0"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
