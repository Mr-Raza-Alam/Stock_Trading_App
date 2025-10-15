import React from 'react';
import '../../cssStyling/Pricing/PricingTable.css';

function Commodity() {
    return (
        <div className="pricing-table-container">
            <div className="pricing-table-wrapper">
                <table className="pricing-table">
                    <thead>
                        <tr>
                            <th>Charges</th>
                            <th>Commodity Futures</th>
                            <th>Commodity Options</th>
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
                            <td className="percentage-value">0.01% on sell side (Non-Agri)</td>
                            <td className="percentage-value">0.01% on sell side</td>
                        </tr>
                        <tr>
                            <td>Transaction charges</td>
                            <td>
                                MCX: <span className="percentage-value">0.0021%</span><br />
                                NSE: <span className="percentage-value">0.0418%</span>
                            </td>
                            <td>
                                MCX: <span className="percentage-value">0.0001%</span><br />
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
                            <td>
                                Agri: <span className="monetary-value">₹1/crore</span><br />
                                Non-agri: <span className="monetary-value">₹10/crore</span>
                            </td>
                            <td className="monetary-value">₹10 / crore</td>
                        </tr>
                        <tr>
                            <td>Stamp charges</td>
                            <td className="percentage-value">0.002% or ₹200 / crore on buy side</td>
                            <td className="percentage-value">0.003% or ₹300 / crore on buy side</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Commodity;


