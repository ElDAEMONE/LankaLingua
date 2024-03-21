import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './assets/pages/login';
import Register from './assets/pages/register';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signUp' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
