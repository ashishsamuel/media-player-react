import React, { useEffect, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { addCategory, deleteSingleCategory, fetchAllCategories, getSingleVideo, updateCategory } from '../services/allServices';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';

function Category() {
  const [show, setShow] = useState(false);
  const [categoryData, setCategoryData] = useState({
    id:"",
    categoryName:"",
    allVideos:[]
  });
  const [categoryList, setCategoryList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNewCategory = async()=>{
    const {id, categoryName} = categoryData;
    
    if(!id || !categoryName){
      toast.info("Please fill all the details !")
    } else {
        const response = await addCategory(categoryData);
      if(response?.status >=200 && response.status <300){
        handleClose();
        toast.success("Category has been added successfully");
        fetchAllCategoriesFunction();
      } else {
        toast.error("Please provide unique id for adding category");
      }
    }
  }

  const fetchAllCategoriesFunction = async()=>{
    const response = await fetchAllCategories();
    if(response?.status>=200){
      setCategoryList(response?.data);
    }
  }

  const deleteCategory = async(id)=> {
    const response = await deleteSingleCategory(id);
    if(response?.status>=200 && response?.status<300){
      toast.success("Category deleted successfully");
      fetchAllCategoriesFunction();
    } else {
      toast.error("error occured");
    }
  }

  const dragOver = (e)=>{
    e.preventDefault();
    console.log("draggin over the category");
  }

  const handleDrop = async(e,categoryId)=>{
    console.log("dropping event",categoryId);
    let sourceVideoId = e.dataTransfer.getData("videoId");
    console.log("source Videoid",sourceVideoId);
    // logic for adding video to that category
    const {data} = await getSingleVideo(sourceVideoId);
    console.log("data of the source video", data);

    let selectedCategory = categoryList.find((item)=> item.id ===categoryId);
    const videoPresentFlag = selectedCategory.allVideos.some((selectedvideo)=>{
      return selectedvideo.id===data.id
    })
    console.log("video present flag",videoPresentFlag);
    
    if(videoPresentFlag){
      toast.error("Already this video has been added to the category before");
    } else {
      console.log("selectedCategory",selectedCategory);
selectedCategory.allVideos.push(data);
    const response = await updateCategory(categoryId,selectedCategory);
    if(response?.status>=200 && response?.status<300){
      toast.success(`${data.caption} has been added successfuly to the ${selectedCategory.categoryName}`)
      fetchAllCategoriesFunction();
    } else {
      toast.error("Something error occured");
    }
    }
    
  }

  useEffect(()=>{
    fetchAllCategoriesFunction();
  },[])
  return (
    <>
    { categoryList?.length>0 ? categoryList.map((category)=>(
      <div className='d-flex justify-content-between'
      onDragOver={(e)=>{dragOver(e)}} onDrop={(e)=>{handleDrop(e,category?.id)}}>
        <p className='mt-2'>{category.categoryName}</p>
        <Button variant="container" onClick={()=>deleteCategory(category?.id)}>
          <DeleteIcon/>
        </Button>
      </div>
    )): <div> No Categories to display </div>}
    <div className="d-grid my-2">
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