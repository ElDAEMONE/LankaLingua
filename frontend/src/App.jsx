// import * as React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Login from './assets/pages/login';
// import Register from './assets/pages/register';
// import Translator from './assets/pages/translator';
// import Profile from './assets/pages/profile';
// import { ChakraProvider } from '@chakra-ui/react'


// function App() {
//   return (
    
//     <BrowserRouter>
//       <Routes>
//         <Route path='/login' element={<Login />} />
//         <Route path='/signUp' element={<Register />} />
//         <Route path='/translator' element={<Translator />} />
//         <Route path='/profile' element={<Profile/>} />
//         {/* Default route */}
//         <Route element={<Login />} />
//       </Routes>
//     </BrowserRouter>
    
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/pages/login";
import Register from "./assets/pages/register";
import Translator from "./assets/pages/translator";
import Profile from "./assets/pages/profile";
import { ChakraProvider } from "@chakra-ui/react";
import { createTheme, ThemeProvider } from "@mui/material/styles"; // Import ThemeProvider and createTheme
import Categories from "./assets/pages/categories";
import ResponsiveAppBar from "./assets/components/Translator/topBar";

// Define a custom theme
const theme = createTheme();

function App() {
  return (
    <ChakraProvider>
      {/* Wrap your entire application with ThemeProvider */}
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ResponsiveAppBar/>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/categories" element={<Categories/>} />
            {/* Default route */}
            <Route element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
