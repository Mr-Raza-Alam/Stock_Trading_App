import React from 'react';
import Hero from './Hero_section';
import Award from './Award';
import Statics from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../Open_Account';

function HomePage() {
    return ( 
        <>
         <Hero/>
         <Award/>
         <Statics/>
         <Pricing/>
         <Education/>
         <OpenAccount/>
        </>
     );
}

export default HomePage;
