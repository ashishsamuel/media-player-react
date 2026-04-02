import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import WatchHistory from './Pages/WatchHistory';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/watch-history' element={<WatchHistory/>}/>
      </Routes>
      <hr/>
      <Footer/>
      <ToastContainer
      position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="dark"/>
    </div>
  );
}

export default App;
