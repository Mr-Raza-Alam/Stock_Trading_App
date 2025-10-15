import React from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Bockerage from './Brokerage';
import Charges_explain from './Charges_explain';
import Currency from './Currency';
import Commodity from './Commodity';
import Equity from './Equity';

import ChargesPage from './ChargesPage';


function PricingPage() {
    const location = useLocation();
    
    const renderTabContent = () => {
        switch(location.pathname) {
            case '/price/equity':
                return <Equity/>;
            case '/price/currency':
                return <Currency/>;
            case '/price/commodity':
                return <Commodity/>;
            default:
                return null;
        }
    };

    return (
        <>
        <Hero/>
        <Bockerage/>
        {renderTabContent()}
        <div className="row text-center mt-2">
        <p><a href="https://zerodha.com/brokerage-calculator#tab-equities">Calculate your costs upfront</a> using our brokerage calculator</p>
        </div>
        <ChargesPage/>
        <Charges_explain/>
        </>
    );
}

export default PricingPage;

