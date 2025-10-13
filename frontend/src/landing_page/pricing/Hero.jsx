import React from 'react';
import PriceO from '../../assets/pricing0.svg';
import Price2O from '../../assets/intradayTrades.svg';
function Hero() {
    return (  
        <>
          <div className="container p-5 mt-5">
            
            <div className="row text-center p-5">
                <h1>Charges</h1>
                <p>List of all charges and taxes</p>
            </div>

            <div className="row p-5 mb-3">
                <div className="col-4 text-center text-muted">
                    <img src={PriceO} alt="0" />
                    <h1 className='fs-5'>Free equity delivery</h1>
                    <p className='pt-4'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>

                <div className="col-4 text-center text-muted">
                    <img src={Price2O} alt="20" />
                    <h1 className='fs-5'>Intraday and F&O trades</h1>
                    <p className='pt-4'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-4 text-center text-muted">
                    <img src={PriceO} alt="0" />
                    <h1 className='fs-5'>Free direct MF</h1>
                    <p className='pt-4'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>                
            </div>
          </div>

        </>
    );
}

export default Hero;
