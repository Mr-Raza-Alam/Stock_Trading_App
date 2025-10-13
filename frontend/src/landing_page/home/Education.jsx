import React from 'react';
import EducatImage from '../../assets/education.svg';
function Education() {
    return ( 
    <>
      <div className="container p-4">
        <div className="row p-4">
          <div className="col mx-5 ">
            <img src={EducatImage} alt="education-image" style={{width:"60%"}}/>
          </div>
          <div className="col">
             <h1 className='fs-3 mb-5'>Free and open market education</h1>
               <div className="row mb-5">
                <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="">Varsity <i class="fa-solid fa-arrow-right"></i></a>
               </div>
               <div className="row">
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="">TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
               </div>
      
          </div>
        </div>
      </div> 
    </> );
}

export default Education;
