import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import BottomNavbar from './components/Navbar/BottomNavbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import ProductList from './components/Products/ProductList';
import Socials from './components/Socials/Socials';
import ProductPage from './components/Products/ProductPage';

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
          <Route path='/About' exact element={ <About />} />
          <Route path='/Products' element={ <ProductList />} />
          <Route path='/Socials' element={ <Socials />} />
          <Route path='/Products/:_id' element={<ProductPage />} />
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
