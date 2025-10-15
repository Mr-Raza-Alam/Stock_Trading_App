import React from 'react';
import '../../cssStyling/Pricing/Charges_explain.css';

function Charges() {
    return (
        <div className="charges-container">
            <div className="charges-content">
                <div className="charges-grid">
                    {/* Left Column */}
                    <div className="charges-column">
                        <div className="charge-section">
                            <h3 className="section-title">Securities/Commodities transaction tax</h3>
                            <p>Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                            <p className="highlight-text">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Transaction/Turnover Charges</h3>
                            <p>Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                            <div className="info-list">
                                <p>BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                                <p>BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
                                <p>BSE has revised transaction charges for group A, B and other non exclusive scrips at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                                <p>BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                            </div>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Call & trade</h3>
                            <p>Additional charges of <span className="amount">₹50 per order</span> for orders placed through a dealer at Zerodha including auto square off orders.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Stamp charges</h3>
                            <p>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">NRI brokerage charges</h3>
                            <ul className="charge-list">
                                <li>For a non-PIS account, <span className="amount">0.5% or ₹50 per executed order</span> for equity and F&O (whichever is lower).</li>
                                <li>For a PIS account, <span className="amount">0.5% or ₹200 per executed order</span> for equity (whichever is lower).</li>
                                <li><span className="amount">₹500 + GST</span> as yearly account maintenance charges (AMC).</li>
                            </ul>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Account with debit balance</h3>
                            <p>If the account is in debit balance, any order placed will be charged <span className="amount">₹40 per executed order</span> instead of ₹20 per executed order.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Charges for Investor's Protection Fund Trust (IPFT) by NSE</h3>
                            <ul className="charge-list">
                                <li>Equity and Futures - <span className="amount">₹10 per crore + GST</span> of the traded value.</li>
                                <li>Options - <span className="amount">₹50 per crore + GST</span> traded value (premium value).</li>
                                <li>Currency - <span className="amount">₹0.05 per lakh + GST</span> of turnover for Futures and <span className="amount">₹2 per lakh + GST</span> of premium for Options.</li>
                            </ul>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Margin Trading Facility (MTF)</h3>
                            <ul className="charge-list">
                                <li>MTF Interest: <span className="amount">0.04% per day (₹40 per lakh)</span> on the funded amount. The interest is applied from T+1 day until the day MTF stocks are sold.</li>
                                <li>MTF Brokerage: <span className="amount">0.3% or Rs. 20/executed order</span>, whichever is lower.</li>
                                <li>MTF pledge charge: <span className="amount">₹15 + GST per pledge</span> and unpledge request per ISIN.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="charges-column">
                        <div className="charge-section">
                            <h3 className="section-title">GST</h3>
                            <p>Tax levied by the government on the services rendered. <span className="amount">18%</span> of (brokerage + SEBI charges + transaction charges)</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">SEBI Charges</h3>
                            <p>Charged at <span className="amount">₹10 per crore + GST</span> by Securities and Exchange Board of India for regulating the markets.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">DP (Depository participant) charges</h3>
                            <p><span className="amount">₹15.34 per scrip</span> (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity.</p>
                            <div className="info-list">
                                <p>Female demat account holders (as first holder) will enjoy a discount of <span className="amount">₹0.25 per transaction</span> on the CDSL fee.</p>
                                <p>Debit transactions of mutual funds & bonds get an additional discount of <span className="amount">₹0.25</span> on the CDSL fee.</p>
                            </div>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Pledging charges</h3>
                            <p><span className="amount">₹30 + GST per pledge</span> request per ISIN.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">AMC (Account maintenance charges)</h3>
                            <div className="info-list">
                                <p>For BSDA demat account: <span className="amount">Zero charges</span> if the holding value is less than ₹4,00,000. <a href="#" className="info-link">Learn more about BSDA</a></p>
                                <p>For non-BSDA demat accounts: <span className="amount">₹300/year + 18% GST</span> charged quarterly (90 days). <a href="#" className="info-link">Learn more about AMC</a></p>
                            </div>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Corporate action order charges</h3>
                            <p><span className="amount">₹20 plus GST</span> will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Off-market transfer charges</h3>
                            <p><span className="amount">₹25 per transaction</span>.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Physical CMR request</h3>
                            <p>First CMR request is <span className="amount free">free</span>. <span className="amount">₹20 + ₹100 (courier charge) + 18% GST</span> for subsequent requests.</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Payment gateway charges</h3>
                            <p><span className="amount">₹9 + GST</span> (Not levied on transfers done via UPI)</p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Delayed Payment Charges</h3>
                            <p>Interest is levied at <span className="amount">18% a year or 0.05% per day</span> on the debit balance in your trading account. <a href="https://support.zerodha.com/category/console/ledger/articles/interest-charges" className="info-link">Learn more</a></p>
                        </div>

                        <div className="charge-section">
                            <h3 className="section-title">Trading using 3-in-1 account with block functionality</h3>
                            <ul className="charge-list">
                                <li>Delivery & MTF Brokerage: <span className="amount">0.5% per executed order</span></li>
                                <li>Intraday Brokerage: <span className="amount">0.05% per executed order</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Disclaimer Section */}
                <div className="disclaimer-section">
                    <h3 className="section-title">Disclaimer</h3>
                    <div className="disclaimer-content">
                        <p>For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts.</p>
                        <p>Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Charges;

