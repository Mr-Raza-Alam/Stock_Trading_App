import React from 'react';
import Logo from '../assets/logo.svg';
import Fb from '../assets/facebook.png';
import Ldin from '../assets/linkedin.png';
import Wapp from '../assets/whatsapp.png';
import Ytube from '../assets/youtube.png';
import Twitter from '../assets/twitter.png';
import Tele from '../assets/telegram.png';
import Insta from '../assets/instagram.png';
import '../cssStyling/Footer.css';
function Footer() {
  return (
    <>
    <footer className='border-top p-5 mt-3' style={{marginLeft:"3rem",backgroundColor:"rgb(250,250,250)"}}>
      <div className="container footer">
        <div className="row foot-upper-sect">
          <div className="col-3">
            <img src={Logo} alt="logo" style={{ width: "50%",marginTop:"1.5rem" }} />

            <p className='my-3 text-grey'>© 2010 - 2025, Zerodha Broking Ltd.</p>
            <p className='text-grey'> All rights reserved.</p>

            <div className="social" style={{marginTop:"2rem"}}>
              <ul>
                <li><img src={Twitter} alt="twitter" /></li>
                <li><img src={Fb} alt="facebook" /></li>
                <li><img src={Insta} alt="instagram" /></li>
                <li><img src={Ldin} alt="linkedin" /></li>
              </ul>
            </div>
            <hr />
            <div className="social">
              <ul>
                <li><img src={Ytube} alt="youtube" /></li>
                <li><img src={Wapp} alt="whatsapp" /></li>
                <li><img src={Tele} alt="telegram" /></li>
              </ul>
            </div>
          </div>

          <div className="col-9">
            <div className="row">

              <div className="col-3">
                <ul className='list-style'>
                  <li className='nav-head'>Account</li>
                  <li><a href="">Open demat account</a></li>
                  <li><a href="">Minor demat account</a></li>
                  <li><a href="">NRI demat account</a></li>
                  <li><a href="">Commodity</a></li>
                  <li><a href="">Dematerialisation</a></li>
                  <li><a href="">Fund transfer</a></li>
                  <li><a href="">MTF</a></li>
                  <li><a href="">Referral program</a></li>
                </ul>
              </div>

              <div className="col-3">
                <ul className='list-style'>
                  <li className='nav-head'>Support</li>
                  <li><a href="">Contact us</a></li>
                  <li><a href="">Support portal</a></li>
                  <li><a href="">How to file a complaint?</a></li>
                  <li><a href="">Status of your complaints</a></li>
                  <li><a href="">Bulletin</a></li>
                  <li><a href="">Circular</a></li>
                  <li><a href="">Z-Connect blog</a></li>
                  <li><a href="">Downloads</a></li>
                </ul>
              </div>

              <div className="col-3">
                <ul className='list-style'>
                  <li className='nav-head'>Company</li>
                  <li><a href="">About</a></li>
                  <li><a href="">Philosophy</a></li>
                  <li><a href="">Press & media</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Zerodha Cares (CSR)</a></li>
                  <li><a href="">Zerodha.tech</a></li>
                  <li><a href="">Open source</a></li>
                </ul>
              </div>

              <div className="col-3">
                <ul className='list-style'>
                  <li className='nav-head'>Quick links</li>
                  <li><a href="">Upcoming IPOs</a></li>
                  <li><a href="">Brokerage charges</a></li>
                  <li><a href="">Market holidays</a></li>
                  <li><a href="">Economic calendar</a></li>
                  <li><a href="">Calculators</a></li>
                  <li><a href="">Markets</a></li>
                  <li><a href="">Sectors</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

          <div className='mt-5 text-muted' style={{fontSize:"12px",opacity:"0.8"}}>
          <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write transactions <a href="">complaints@zerodha.com</a>, for DP related to <a href="">dp@zerodha.com.</a>Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

          <p>Procedure to file a complaint on <a href=''>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

          <p><a href="">Smart Online Dispute Resolution </a>|<a href="">Grievances Redressal Mechanism</a></p>

          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

          <p>India's largest broker based on networth as per NSE. <a href="">NSE broker factsheet</a></p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="">create a ticket here.</a> </p>
         </div>

        <div className="footer-graveyard-links text-center mt-5">
          <ul>
            <li><a href=''> NSE</a> </li>
            <li> <a href=''> BSE</a></li>
            <li> <a href=''> Terms & conditions</a></li>
            <li><a href=''> Policies & procedures</a></li>
            <li><a href=''> Privacy policy</a></li>
            <li><a href=''> Disclosure</a></li>
            <li> <a href=''> For investor's attention</a></li>
            <li><a href=''> Investor charter</a></li>
          </ul>
        </div>
      </div>
      </footer>
    </>
  );
}

export default Footer;
