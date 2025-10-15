import React, { useState } from 'react';
import '../../cssStyling/supportPage/Options.css';

function Options() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('account')}>
                <span><i className="fa-solid fa-circle-plus"></i></span>
                <span className="title">Account Opening</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'account' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'account' && (
                <div className="accordion-content">
                  <ul typeof='bullet'>
                    <li><a href="https://support.zerodha.com/category/account-opening/resident-individual">Resident individual</a></li>
                    <li><a href="https://support.zerodha.com/category/account-opening/minor">Minor</a></li>
                    <li><a href="https://support.zerodha.com/category/account-opening/nri">Non Resident Indian &lpar;NRI&rpar;</a></li>
                    <li><a href="https://support.zerodha.com/category/account-opening/company">Company, Partnership, HUF and LLP</a></li>
                    <li><a href="https://support.zerodha.com/category/account-opening/glossary">Glossary</a></li>
                  </ul>
                </div>
              )}
            </div>

            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('zerodha')}>
                <span><i className="fa-regular fa-circle-user"></i></span>
                <span className="title">Your Zerodha Account</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'zerodha' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'zerodha' && (
                <div className="accordion-content">
                  <ul>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile">Your Profile</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/account-modification">Account Modification</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/cmr-dp">Client Master (CMR) and Depository Participants(DP)</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/nomination">Nomination</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">Transfer and conversion of securities</a></li>
                  </ul>
                </div>
              )}
            </div>

            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('kite')}>
                 <span><i class="fa-brands fa-flutter"></i></span>
                <span className="title">Kite</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'kite' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'kite' && (
                <div className="accordion-content">
                  <ul>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile">IPO</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/account-modification">Trading FAQs</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/cmr-dp">Margin Trading Facility&lpar;MTF&rap; and Margins</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/nomination">Charts and orders</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">Alerts and Nudges</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">General</a></li>                  </ul>
                </div>
              )}
            </div>

            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('funds')}>
                <span><i class="fa-solid fa-indian-rupee-sign"></i></span>
                <span className="title">Funds</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'funds' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'funds' && (
                <div className="accordion-content">
                  <ul>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile">Add money</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/account-modification">Withdraw money</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/cmr-dp">Add bank accounts</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/nomination">eMandates</a></li>
                  </ul>
                </div>
              )}
            </div>

            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('console')}>
                <span><i class="fa-regular fa-copyright"></i></span>
                <span className="title">Console</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'console' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'console' && (
                <div className="accordion-content">
                  <ul>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile">Portfolio</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/account-modification">Corporate actions</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/cmr-dp">Funds statement</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/nomination">Reports</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">Profile</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">Segments</a></li>
                  </ul>
                </div>
              )}
            </div>   
            <div className="custom-accordion-item">
              <div className="accordion-header" onClick={() => toggleSection('coin')}>
                 <span><i class="fa-regular fa-circle"></i></span>
                <span className="title">Coin</span>
                <i className={`fa-solid fa-chevron-down toggle-icon ${openSection === 'coin' ? 'rotate' : ''}`}></i>
              </div>
              {openSection === 'coin' && (
                <div className="accordion-content">
                  <ul>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/your-profile">Mutual funds</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/account-modification">National Pension Scheme&lpar;NPS&rpar;</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/cmr-dp">Fixed Deposit &lpar;FD&rap;</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/nomination">Feautres on Coin</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">Payments and Orders</a></li>
                    <li><a href="https://support.zerodha.com/category/your-zerodha-account/transfer-conversion">General</a></li>                  </ul>
                </div>
              )}
            </div>
          </div>

<div className="col-4">
  <div className="left-link">
    <ul>
      <li>
        <a href="https://zerodha.com/marketintel/bulletin/429410/surveillance-measure-on-scrips-october-2025" target='_blank' rel="noopener noreferrer">
          Surveillance measure on scrips - October 2025
        </a>
      </li>
      <li>
        <a href="https://zerodha.com/marketintel/bulletin/429994/rights-entitlements-listing-in-october-2025" target='_blank' rel="noopener noreferrer">
          Rights Entitlements listing in October 2025
        </a>
      </li>
    </ul>
  </div>

  <div className="row Quick-links">
    <table>
      <thead>
        <tr>
          <th>Quick links</th>
        </tr>
      </thead>
      <tbody>
        {/* ✅ Fixed: Wrapped each <td> in <tr> */}
        <tr>
          <td>
            <a href="https://zerodha.com/open-account" target='_blank' rel="noopener noreferrer">
              1. Track account opening
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://kite.zerodha.com/connect/login?sess_id=bjWKrpNBMZTHC7AQAL8U7p999wTra44H&api_key=console" target='_blank' rel="noopener noreferrer">
              2. Track segment activation
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://zerodha.com/marketintel/bulletin/249809/latest-intraday-leverages-mis-bo-co" target='_blank' rel="noopener noreferrer">
              3. Intraday margins
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://kite.trade/docs/kite/" target='_blank' rel="noopener noreferrer">
              4. Kite user manual
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha" target='_blank' rel="noopener noreferrer">
              5. Learn how to create a ticket
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>

    </>
  );
}
  export default Options;
