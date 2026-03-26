import React from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='d-flex flex-wrap'>
        <div className='d-flex flex-column mx-2' style={{width:'500px'}}>
          <div className='d-flex'>
            <CloudUploadOutlinedIcon/> 
            <span className='mx-1 fs-5'>Media Player</span>
          </div>
          
          <p className='w-50'>Designed and built with all the love in the world by the Luminar team with the help of our contributors</p>
          <p>Code licensed by Ashish, docs CC BY 3.0</p>
          <p>Currently V1.0.0</p>
        </div>
        <div className='d-flex flex-column mx-2' style={{width:'200px'}}>
          <h3>Links</h3>
          <Link className='text-light' style={{textDecoration:'none'}} to={'/'}>Landing Page</Link>
          <Link className='text-light' style={{textDecoration:'none'}} to={'/home'}>Home</Link>
          <Link className='text-light' style={{textDecoration:'none'}} to={'/watch-history'}>Watch History</Link>
        </div>
        <div className='d-flex flex-column mx-2' style={{width:'200px'}}>
          <h3>Guides</h3>
          <Link className='text-light' style={{textDecoration:'none'}} to={'https://react.dev/'}>React</Link>
          <Link className='text-light' style={{textDecoration:'none'}} to={'https://react-bootstrap.github.io/'}>React-bootstrap</Link>
          <Link className='text-light' style={{textDecoration:'none'}} to={'https://reactrouter.com/'}>React router dom</Link>
        </div>
        <div className='d-flex flex-column mx-2'>
          <h3>Contact Us</h3>
          <div className='d-flex'>
            <input type="text" className='p-2' placeholder="Enter your email"/>
            <button className='bg-info text-dark mx-1 p-2'>Subscribe</button>
          </div>
        </div>
      </div>
      <p>Copyright &copy; 2026 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer