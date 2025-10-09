import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero_section';
import Award from './Award';
import Statics from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../Open_Account';
import Footer from '../footer';

function HomePage() {
    return ( 
        <>
         <Navbar/>
         <Hero/>
         <Award/>
         <Statics/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
         <Footer/>
        </>
     );
}

export default HomePage;
