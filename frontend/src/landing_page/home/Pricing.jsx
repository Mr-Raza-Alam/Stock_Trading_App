import React from 'react';
import PriceO from '../../assets/pricing0.svg';
import Price2O from '../../assets/intradayTrades.svg';

function Pricing() {
    return ( 
        <>
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6 ">
                    <h1 className='fs-3 mb-3'>Unbeatable pricing</h1> <br />
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="">See pricing  <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6">
                    <div className="row mt-3">
                        <div className="col-4">
                            <img src={PriceO} alt="price0" />
                        </div>
                        <div className="col-4">
                            <img src={PriceO} alt="price0" />
                        </div>
                        <div className="col-4">
                            <img src={Price2O} alt="price20" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default  Pricing;