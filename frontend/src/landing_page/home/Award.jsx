import React from 'react';
import AwardImgae from '../../assets/largestBroker.svg';
import Presslogos from '../../assets/pressLogos.png';

function Award () {
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-6 mb-5 ml-5 mt-3">
                 <img src={AwardImgae} alt="award-image"/>
                </div>
                <div className="col-6 mb-6 ml-5">
                    <h1 className='p-2'>Largest stock broker in India</h1>
                    <p className='p-2'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and Investing in:</p>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivaties</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt.Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={Presslogos} alt="press-logos" />
               </div>
            </div>
        </div>
        </>
    );
}

export default Award ;
