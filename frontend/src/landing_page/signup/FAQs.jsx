import React, { useState } from 'react';
import '../../cssStyling/Signup/Faqs.css';

function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'What is a Zerodha account?',
            answer: 'A Zerodha account is a trading and demat account that allows you to invest in stocks, mutual funds, IPOs, and other financial instruments. It combines a trading account, demat account, and bank account linkage for seamless investment experience.'
        },
        {
            id: 2,
            question: 'What documents are required to open a demat account?',
            answer: 'You need PAN card, Aadhaar card, bank account details, and a cancelled cheque or bank statement. The entire account opening process is digital and paperless.'
        },
        {
            id: 3,
            question: 'Is Zerodha account opening free?',
            answer: 'Yes, opening a Zerodha account is completely free. There is no account opening fee. However, there may be annual maintenance charges after the first year.'
        },
        {
            id: 4,
            question: 'Are there any maintenance charges for a demat account?',
            answer: 'Annual maintenance charges (AMC) apply after the first year. For holdings below ₹4 lakhs, the account is free under BSDA category. For holdings above that, AMC of ₹300 per year is charged.'
        },
        {
            id: 5,
            question: 'Can I open a demat account without a bank account?',
            answer: 'No, a bank account is mandatory to open a demat account as it is required for fund transfers, dividend credits, and other financial transactions.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faqs-section">
            <div className="faqs-container">
                <h2 className="faqs-heading">FAQs</h2>
                
                <div className="faqs-list">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className={`faq-item ${openIndex === index ? 'active' : ''}`}>
                            <button 
                                className="faq-question" 
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <i className={`fa-solid fa-chevron-down faq-icon ${openIndex === index ? 'rotated' : ''}`}></i>
                            </button>
                            <div className={`faq-answer ${openIndex === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FAQs;

