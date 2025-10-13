import React from 'react';
import CEO_Image from '../../assets/nithinKamath.jpg'
function People() {
  return (
    <>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-6 p-4">
            <div className="row mt-5 mx-5 text-center fs-8">
              <img src={CEO_Image} alt="ceo-image" style={{ width: "90%", height:"90%", borderRadius:"50%", transform:"translate(5rem,-4rem)" }} />
              <h1 style={{fontSize:"20px",transform:"translate(3rem,-2rem)"}}>Nithin Kamath</h1>
              <p style={{transform:"translate(3rem,-2rem)"}}>Founder,CEO</p>
            </div>
          </div>

          <div className="col-6 p-4">
            <h1 className='fs-3 text-muted' style={{transform:"translate(.4rem,-6rem)"}}>People</h1>
            <div className="row">
             <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            
             <p className='pt-2'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

             <p className='p-2'>Playing basketball is his zen.</p>

             <p className='p-2'>Connect on <a href="https://nithinkamath.me/" target='main'>Homepage </a> / <a href="https://tradingqna.com/u/nithin/summary" target='_blank'>TradingQnA </a> / <a href="https://x.com/Nithin0dha" target='main'>Twitter</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default People;
