import React from 'react';
import '../../cssStyling/Pricing/PricingTable.css';


function Equity() {
    return (
        <div className="pricing-table-container">
            <div className="pricing-table-wrapper">
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th>Charges</th>
                            <th>Equity Delivery</th>
                            <th>Equity Intraday</th>
                            <th>F&O-Futures</th>
                            <th>F&O-Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brokerage</td>
                            <td className="zero-value">Zero Brokerage</td>
                            <td className="percentage-value">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="percentage-value">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="monetary-value">Flat Rs. 20 per executed order</td>
                        </tr>
                        <tr>
                            <td>STT/CTT</td>
                            <td className="percentage-value">0.1% on buy & sell</td>
                            <td className="percentage-value">0.25% on buy & sell</td>
                            <td className="percentage-value">0.02% on buy & sell</td>
                            <td>
                                <ul>
                                    <li>0.125% of the intrinsic value on options that are bought and exercised</li>
                                    <li>0.1% on sell side (on premium)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Transaction charges</td>
                            <td>
                                NSE: <span className="percentage-value">0.000297%</span><br />
                                BSE: <span className="percentage-value">0.000375%</span>
                            </td>
                            <td>
                                NSE: <span className="percentage-value">0.00297%</span><br />
                                BSE: <span className="percentage-value">0.00375%</span>
                            </td>
                            <td>
                                NSE: <span className="percentage-value">0.00173%</span><br />
                                BSE: <span className="zero-value">0</span>
                            </td>
                            <td>
                                NSE: <span className="percentage-value">0.03503% (on premium)</span><br />
                                BSE: <span className="percentage-value">0.0325% (on premium)</span>
                            </td>
                        </tr>
                        <tr>
                            <td>GST</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td>SEBI charges</td>
                            <td className="monetary-value">₹10 / crore</td>
                            <td className="monetary-value">₹10 / crore</td>
                            <td className="monetary-value">₹10 / crore</td>
                            <td className="monetary-value">₹10 / crore</td>
                        </tr>
                        <tr>
                            <td>Stamp charges</td>
                            <td className="percentage-value">0.015% or ₹1500 / crore on buy side</td>
                            <td className="percentage-value">0.003% or ₹300 / crore on buy side</td>
                            <td className="percentage-value">0.003% or ₹200 / crore on buy side</td>
                            <td className="percentage-value">0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Equity;

