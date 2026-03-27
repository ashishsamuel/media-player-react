import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Table } from 'react-bootstrap';

function WatchHistory() {
  return (
    <>
      <div className='d-flex justify-content-between container mt-5'>
        <h3>Watch History</h3>
        <Link to={'/home'} className='text-light' style={{textDecoration:'none'}}>
        <ArrowBackIcon/><span className='ms-2'>Back to Home</span></Link>
      </div>
      <div className='mt-4 container'>
        <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time Stamp</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>https://www.youtube.com/watch?v=QUDYpdFzwQQ&list=RDQUDYpdFzwQQ&start_radio=1</td>
          <td>11-02-2026</td>
        </tr>
      </tbody>
    </Table>
      </div>
    </>
  )
}

export default WatchHistory