import React from 'react';
import homeHero from '../../assets/homeHero.png';
function Hero() {
    return ( 
        <>
         <div className="container">
            <div className="row">
             <img src={homeHero} alt="hero_image"/> <hr />

             <h1> Invest in everything   </h1> <br /> 
             <h3>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h3> <br /><br />
             <button>Signup for free</button>
            </div>
         </div>
        </>
     );
}

export default Hero;

/*
                <div className="col"></div>
                <div className="col"></div>
*/