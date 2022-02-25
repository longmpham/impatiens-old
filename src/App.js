import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import Home from './components/Home/Home';
// import About from './components/About/About';
import ProductList from './components/Products/ProductList';
import Socials from './components/Socials/Socials';

import { ThemeProvider } from '@mui/material'
import theme from './theme'

import './App.css';

import nailList from './data';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home /> } />
          <Route path='/about' exact element={ <Home />} />
          <Route path='/products' element={ <ProductList />} />
          <Route path='/socials' element={ <Socials />} />
          {/* <Route path='/products/'{data._id} element={<ProductPage />} /> */}
        </Routes>
        <BottomNavbar />
      </BrowserRouter>
    </ThemeProvider>



    // <div className="App">
    //   <Navbar />
    //   Main page
    // </div>
  );
}

export default App;
