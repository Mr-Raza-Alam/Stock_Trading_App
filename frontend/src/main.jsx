import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landing_page/home/homePage.jsx';
import Navbar from './landing_page/Navbar.jsx';
import Footer from './landing_page/Footer.jsx';
import SignupPage from './landing_page/signup/SignupPage.jsx';
import AboutPage from './landing_page/about/AboutPage.jsx';
import PricingPage from './landing_page/pricing/PricingPage.jsx';
import ProductPage from './landing_page/products/ProductPage.jsx';
import SupportPage from './landing_page/support/SupportPage.jsx';
import NotFoundPage from './landing_page/NotFound.jsx';
import Charges from './landing_page/pricing/Charges_explain.jsx';
import Currency from './landing_page/pricing/Currency.jsx';
import Commodity from './landing_page/pricing/Commodity.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/price' element={<PricingPage/>}>
          <Route path='equity' element={<Charges/>}/>
          <Route path='currency' element={<Currency/>}/>
          <Route path='commodity' element={<Commodity/>}/>
        </Route>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>      
      </Routes>
      <Footer/>
  </BrowserRouter>
)
