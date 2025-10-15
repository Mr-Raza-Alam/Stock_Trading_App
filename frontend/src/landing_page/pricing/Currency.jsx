import React from 'react';
import '../../cssStyling/Pricing/PricingTable.css';


function Currency() {
    return (
        <div className="pricing-table-container">
            <div className="pricing-table-wrapper">
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th>Charges</th>
                            <th>Currency Futures</th>
                            <th>Currency Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brokerage</td>
                            <td className="percentage-value">0.03% or Rs. 20/executed order whichever is lower</td>
                            <td className="monetary-value">₹20/executed order</td>
                        </tr>
                        <tr>
                            <td>STT/CTT</td>
                            <td className="zero-value">No STT</td>
                            <td className="zero-value">No STT</td>
                        </tr>
                        <tr>
                            <td>Transaction charges</td>
                            <td>
                                MCX: <span className="percentage-value">0.00035%</span><br />
                                NSE: <span className="percentage-value">0.0311%</span>
                            </td>
                            <td>
                                MCX: <span className="percentage-value">0.00045%</span><br />
                                NSE: <span className="percentage-value">0.001%</span>
                            </td>
                        </tr>
                        <tr>
                            <td>GST</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                            <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        </tr>
                        <tr>
                            <td>SEBI charges</td>
                            <td className="monetary-value">₹10 / crore</td>
                            <td className="monetary-value">₹10 / crore</td>
                        </tr>
                        <tr>
                            <td>Stamp charges</td>
                            <td className="percentage-value">0.001% or ₹10 / crore on buy side</td>
                            <td className="percentage-value">0.0001% or ₹10 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Currency;

