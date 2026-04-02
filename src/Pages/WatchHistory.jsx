import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, Table } from 'react-bootstrap';
import { deleteWatchHistory, fetchAllWatchHistory } from '../services/allServices';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

function WatchHistory() {
  const [watchHistoryList, setWatchHistoryList] = useState([]);

  const fetchWatchHistory = async()=> {
    const response = await fetchAllWatchHistory();
    if(response?.status >=200 && response?.status<300){
      setWatchHistoryList(response?.data)
    }
  }

  const deleteSingleWatchHistory = async(id)=> {
    const response = await deleteWatchHistory(id);
    if(response?.status >=200 && response?.status <300){
      fetchWatchHistory();
      toast.success("Watch History has been deleted successfully");
    } else {
      toast.error("Some error occured");
    }
  }

  useEffect(()=>{
    fetchWatchHistory();
  },[])

  return (
    <>
      <div className='d-flex justify-content-between container mt-5'>
        <h3>Watch History</h3>
        <Link to={'/home'} className='text-light' style={{textDecoration:'none'}}>
        <ArrowBackIcon/><span className='ms-2'>Back to Home</span></Link>
      </div>
      <div className='mt-4 container mb-5'>
        <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          watchHistoryList?.length>0 ? watchHistoryList.map((data,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{data?.caption}</td>
          <td>{data?.videoUrl}</td>
          <td>{data?.timeStamp}</td>
          <td><Button variant="container" onClick={()=>deleteSingleWatchHistory(data?.id)}>
          <DeleteIcon/>
        </Button></td>
        </tr>
          )):<h5 className='mt-3'>No Watch History</h5>
        }
        
      </tbody>
    </Table>
      </div>
    </>
  )
}

export default WatchHistory