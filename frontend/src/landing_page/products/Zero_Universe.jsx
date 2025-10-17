import React from 'react';
import StreakLogo from '../../assets/streakLogo.png'
import SmallcaseLogo from '../../assets/smallcaseLogo.png'
import SensibullLogo from '../../assets/sensibullLogo.svg'
import DittoLogo from '../../assets/dittoLogo.png'
import ZeroFund from '../../assets/zerodhaFundhouse.png'
import Tijori from '../../assets/tijori.svg'

function Universe() {
  return (
    <>
      <div className="container p-5" style={{transform:"translateY(0rem)"}}>

        <div className="row text-center p-5 ">
          <h1 >The Zerodha Universe</h1>
          <p >Extend your trading and investment experience even further with our partner platforms zerodhahouseforms</p>
          {/* upper box */}
          <div className="row mt-3 p-5 text-center">

            <div className="col-4">
              <img src={ZeroFund} alt="zero-fund house" style={{ width: "70%" }} />
              <p className='p-4 text-muted'>Our assest management venture that is creating simple and transparent index funds to help save for your goals</p>
            </div>

            <div className="col-4">
                <img src={SensibullLogo} alt="sensibull" style={{ width: "76%"}} />
                <p className='text-muted'style={{transform:"translate(0,2.6rem)"}}>Options trading platform that lets you
                  create strategies, analyze positions, and examine
                  data points like open interest, FII/DII,and more.
                </p>              
            </div>

            <div className="col-4">
              <img src={Tijori} alt="tijori" style={{ width:"80%",transform:"translate(2rem,-1rem)" }} />
              <p className='text-muted' style={{transform:"translate(3rem,-.6rem)"}}>Investment research platform
                that offers detailed insights on stocks,
                sectors, supply chains, and more.</p>
            </div>
           </div>
          {/* lower box */}
            <div className="row" style={{transform : "translate(1rem,-3rem)"}}>

              <div className="col-4">
                <img src={StreakLogo} alt="streak" style={{ width: "70%" }} />
                <p className='pt-3 text-muted'>Systematic trading platform that allows you to create and backtest strategies without coding</p>
              </div>

              <div className="col-4">
                <img src={SmallcaseLogo} alt="smallcase" style={{width:"76%",transform:"translate(0,0.4rem)"}}/>
                <p className='text-muted' style={{paddingTop:"2rem"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
              </div>

              <div className="col-4">
                <img src={DittoLogo} alt="ditto" style={{ width: "70%",transform:"translate(2rem,-1rem)" }} />
                <p className='text-muted' style={{transform:"translate(3rem,.3rem)"}}>Personalized advice on life
                  and health insurance. No spam
                  and no mis-selling.
                  Sign up for free</p>
              </div>
            </div>
            <button className='btn btn-primary' style={{width:"20%",fontSize:"1.5rem",transform:"translate(27rem,0rem)"}}>Sign up for free</button>
        </div>
      </div>

    </>

  );
}

export default Universe;
