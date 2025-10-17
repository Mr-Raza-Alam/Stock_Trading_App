import React from 'react';
import '../../cssStyling/Signup/accountBenefits.css';
import AccBenefits from '../../assets/acop-benefits.svg'

function Benefits() {
    const benefits = [
        {
            id: 1,
            title: 'Unbeatable pricing',
            description: 'Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.'
        },
        {
            id: 2,
            title: 'Best investing experience',
            description: 'Simple and intuitive trading platform with an easy-to-understand user interface.'
        },
        {
            id: 3,
            title: 'No spam or gimmicks',
            description: 'Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.'
        },
        {
            id: 4,
            title: 'The Zerodha universe',
            description: 'More than just an app — gain free access to the entire ecosystem of our partner products.'
        }
    ];

    return (
        <section className="benefits-section">
            <div className="benefits-container">
                <div className="benefits-left">
                   <img src={AccBenefits} alt="acop_benefits" />
                    <h2 className="benefits-main-title">Benefits of opening a Zerodha demat account</h2>
                </div>
                
                <div className="benefits-right">
                    {benefits.map((benefit) => (
                        <div key={benefit.id} className="benefit-item">
                            <h3 className="benefit-title text-muted">{benefit.title}</h3>
                            <p className="benefit-description text-muted">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefits;
/**
                     <div className="benefits-illustration">
                        <div className="dot-pattern"></div>
                        <div className="bar-chart">
                            <div className="bar bar-blue-tall"></div>
                            <div className="bar bar-red"></div>
                            <div className="bar bar-blue-short"></div>
                        </div>
                        <div className="pie-chart">
                            <div className="rupee-symbol">₹</div>
                        </div>
                        <div className="percent-symbol">%</div>
                        <div className="graph-icon"></div>
                    </div>
 */