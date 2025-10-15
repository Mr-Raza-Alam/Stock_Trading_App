import React from 'react';
import homeHero from '../../assets/homeHero.png';
import '../../cssStyling/HomePage/Hero_section.css';
function Hero() {
    return ( 
     <>
      <div className="p-5 mt-5 hero-container">
         <div className="row mt-5 text-center hero-section">
           <img src={homeHero} alt="hero_image"/> <hr />
           <h1 className='mt-5'> Invest in everything   </h1> <br />
           <p className='fs-2'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p> <br /><br />
           <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto", color:'white'}}>Signup for free</button>
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