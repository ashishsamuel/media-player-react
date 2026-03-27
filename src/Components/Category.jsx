import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-grid">
      <Button onClick={handleShow} className='btn btn-info text-dark fw-bold border rounded' variant="info">Add new Category</Button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <Form>
      <Form.Group className="mb-3" controlId="formCategoryId">
        <Form.Control type="text" placeholder="Enter Category Id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategoryName">
        <Form.Control type="text" placeholder="Enter Category Name" />
      </Form.Group>


    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" className='text-dark fw-bold'>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category