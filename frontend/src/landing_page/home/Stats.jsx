import React from 'react';
import EcoSystem from '../../assets/ecosystem.png';
import Presslogos from '../../assets/pressLogos.png';

function Statics() {
    return ( 
    <>
      <div className="container p-3">
        <div className="row p-5">
            <div className="col-5 p-5 ">
                <h1 className='fs-2 mb-5'>Trust with confidence</h1>
               <div className="row p-2">
                <h2 className='fs-4'>Customer-first always</h2>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
               </div>

               <div className="row p-2">
                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href="https://zerodha.com/about/philosophy"> Our philosophies.</a></p>
               </div>

               <div className="row p-2">
                <h2 className='fs-4'>The Zerodha universe</h2>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
               </div>

               <div className="row">
                <h2 className='fs-4'>Do better with money</h2>
                <p className='text-muted'>With initiatives like <a href="https://support.zerodha.com/category/trading-and-markets/alerts-and-nudges/nudges/articles/what-is-nudge" target='main'> Nudge</a> and <a href="https://support.zerodha.com/category/console/segments/killswitch/articles/what-is-the-kill-switch" target='_blank'>Kill Switch</a> we don't just facilitate transactions, but actively help you do better with your money.</p>
               </div>

            </div>
            <div className="col-7 mt-9">
                <img src={EcoSystem} alt="ecosystem-image"  style={{width:"90%",marginLeft:"5rem"}}/>

               <div className="text-center mx-7 link">
                <a href="" >Explore our products <i class="fa-solid fa-arrow-right"></i></a> &nbsp; &nbsp;
                <a href="">Try kite demo <i class="fa-solid fa-arrow-right"></i></a> 
               </div>           
            </div>
        </div>
        <div className="row">
            <img src={Presslogos} alt="presslogos" style={{width:"60%", transform:"translate(18rem,-2rem)"}}/>
        </div>
    </div>
   </>
     );
}

export default Statics;
