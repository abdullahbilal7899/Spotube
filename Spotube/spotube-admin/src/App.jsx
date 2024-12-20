import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Route,Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import AddSong from './pages/AddSong';
import AddAlbum from './pages/AddAlbum';
import ListSong from './pages/ListSong';
import ListAlbum from './pages/ListAlbum';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div className='flex items-start min-h-screen'>
      <ToastContainer/>
      <Sidebar/>
      <div className='flex-1 h-screen overflow-y-small bg-[#f3fff7]'>

<div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>
<Routes>
  <Route path='/add-song' element={<AddSong/>}/>
  <Route path='/add-album' element={<AddAlbum/>}/>
  <Route path='/list-song' element={<ListSong/>}/>
  <Route path='/list-album' element={<ListAlbum/>}/>
</Routes>
</div>

      </div>
    </div>
  )
}

export default App
