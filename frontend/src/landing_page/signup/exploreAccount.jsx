import React from 'react';
import '../../cssStyling/Signup/exploreAccount.css';

function AccountTypes() {
    const accountTypes = [
        {
            id: 1,
            iconClass: 'fa-solid fa-user', // Font Awesome icon
            title: 'Individual Account',
            description: 'Invest in equity, mutual funds and derivatives',
        },
        {
            id: 2,
            iconClass: 'fa-solid fa-users', // Font Awesome icon
            title: 'HUF Account',
            description: 'Make tax-efficient investments for your family',
        },
        {
            id: 3,
            iconClass: 'fa-solid fa-globe', // Font Awesome icon
            title: 'NRI Account',
            description: 'Invest in equity, mutual funds, debentures, and more',
        },
        {
            id: 4,
            iconClass: 'fa-solid fa-child', // Font Awesome icon
            title: 'Minor Account',
            description: 'Teach your little ones about money & invest for their future with them',
        },
        {
            id: 5,
            iconClass: 'fa-solid fa-building', // Font Awesome icon
            title: 'Corporate / LLP/ Partnership',
            description: 'Manage your business surplus and investments easily',
        }
    ];

    return (
        <section className="account-types-section">
            <div className="account-types-container">
                <h2 className="section-heading">Explore different account types</h2>
                
                <div className="account-types-grid">
                    {accountTypes.map((account) => (
                        <div key={account.id} className="account-card">
                            <div className="account-icon">
                                <i className={account.iconClass}></i>
                            </div>
                            <h3 className="account-title">{account.title}</h3>
                            <p className="account-description">{account.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AccountTypes;

