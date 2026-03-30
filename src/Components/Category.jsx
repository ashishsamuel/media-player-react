import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { addCategory } from '../services/allServices';
import { toast } from 'react-toastify';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryData, setCategoryData] = useState({
    id:"",
    categoryName:"",
    allVideos:[]
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewCategory = async()=>{
    const {id, categoryName} = categoryData;
    console.log("category data",categoryData);
    
    if(!id || !categoryName){
      toast.info("Please fill all the details !")
    } else {
        const response = await addCategory(categoryData);
      if(response?.status >=200 && response.status <300){
        console.log("response from add category service",response);
        handleClose();
        toast.success("Category has been added successfully");
      } else {
        toast.error("Please provide unique id for adding category");
      }
    }
    
    
  }
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
        <Form.Control type="text" placeholder="Enter Category Id" onChange={(e)=>{setCategoryData({...categoryData,id:e.target.value})}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCategoryName">
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>{setCategoryData({...categoryData,categoryName:e.target.value})}}/>
      </Form.Group>


    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" className='text-dark fw-bold' onClick={addNewCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category