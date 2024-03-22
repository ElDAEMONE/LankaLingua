import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './assets/pages/login';
import Register from './assets/pages/register';
import Translator from './assets/pages/translator';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<Register />} />
        <Route path='/translator' element={<Translator />} />
        {/* Default route */}
        <Route element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
