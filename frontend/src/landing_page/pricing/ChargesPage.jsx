import React from 'react';
import '../../cssStyling/Pricing/ChargesPage.css';

function ChargesPage() {
    return (
        <div className="charges-page-container">
            {/* Account Opening Charges Section */}
            <section className="charges-section">
                <h2 className="section-title">Charges for account opening</h2>
                <div className="charges-table-wrapper">
                    <table className="charges-table">
                        <thead>
                            <tr>
                                <th>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Online account</td>
                                <td>
                                    <span className="free-badge">FREE</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Offline account</td>
                                <td>
                                    <span className="free-badge">FREE</span>
                                </td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td className="charge-amount">₹ 500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td className="charge-amount">₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Demat AMC Section */}
            <section className="charges-section">
                <h2 className="section-title">Demat AMC (Annual Maintenance Charge)</h2>
                <div className="charges-table-wrapper">
                    <table className="charges-table">
                        <thead>
                            <tr>
                                <th>Value of holdings</th>
                                <th>AMC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Up to ₹4 lakh</td>
                                <td>
                                    <span className="free-badge">FREE*</span>
                                </td>
                            </tr>
                            <tr>
                                <td>₹4 lakh - ₹10 lakh</td>
                                <td className="charge-amount">₹ 100 per year, charged quarterly*</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default ChargesPage;
