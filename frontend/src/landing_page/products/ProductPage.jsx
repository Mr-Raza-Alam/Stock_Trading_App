import React from 'react';
import Navbar from "../Navbar";
import Hero from './Hero_Section';
import LeftSection from './LeftCompo';
import RightSection from './RightCompo';
import Universe from './Zero_Universe';
import Footer from "../Footer";


function ProductPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <LeftSection/>
        <RightSection/>
        <Universe/>
        <Footer/>
        </>
     );
}

export default ProductPage;
