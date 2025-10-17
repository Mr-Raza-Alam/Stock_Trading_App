import React from 'react';
import '../../cssStyling/Signup/investOptions.css';

function InvestmentOptions() {
    const investments = [
        {
            id: 1,
            iconClass: 'fa-solid fa-chart-line',
            title: 'Stocks',
            description: 'Invest in all exchange-listed securities'
        },
        {
            id: 2,
            iconClass: 'fa-solid fa-building-columns',
            title: 'Mutual funds',
            description: 'Invest in commission-free direct mutual funds'
        },
        {
            id: 3,
            iconClass: 'fa-solid fa-calendar-check',
            title: 'IPO',
            description: 'Apply to the latest IPOs instantly via UPI'
        },
        {
            id: 4,
            iconClass: 'fa-solid fa-chart-area',
            title: 'Futures & options',
            description: 'Hedge and mitigate market risk through simplified F&O trading'
        }
    ];

    return (
        <section className="investment-options-section">
            <div className="investment-options-container">
                <h2 className="investment-heading">Investment options with Zerodha demat account</h2>
                
                <div className="investment-grid">
                    {investments.map((investment) => (
                        <div key={investment.id} className="investment-card">
                            <div className="investment-icon">
                                <i className={investment.iconClass}></i>
                            </div>
                            <div className="investment-content">
                                <h3 className="investment-title">{investment.title}</h3>
                                <p className="investment-description">{investment.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="explore-button-container">
                    <button className="explore-investments-btn">Explore Investments</button>
                </div>
            </div>
        </section>
    );
}

export default InvestmentOptions;

