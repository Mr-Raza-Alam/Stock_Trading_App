import React from 'react';
import '../../cssStyling/Signup/stepsToOpenAcc.css';
import stepsAcc from '../../assets/steps-acop.svg';

function Steps() {
    const steps = [
        {
            id: 1,
            number: '01',
            title: 'Enter the requested details'
        },
        {
            id: 2,
            number: '02',
            title: 'Complete e-sign & verification'
        },
        {
            id: 3,
            number: '03',
            title: 'Start investing!'
        }
    ];

    return (
        <section className="steps-section">
            <div className="steps-container">
                <h2 className="steps-heading">Steps to open a demat account with Zerodha</h2>
                
                <div className="steps-content">
                     <img src={stepsAcc} alt="steps_acop" />
                    
                    {/* Steps List Section */}
                    <div className="steps-list">
                        {steps.map((step) => (
                            <div key={step.id} className="step-item">
                                <div className="step-number">{step.number}</div>
                                <h3 className="step-title">{step.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;

