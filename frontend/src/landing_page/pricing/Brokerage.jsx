import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../cssStyling/Pricing/Brokerage.css';

function Brokerage() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return ( 
        <>
        <div className="brokerage-container">
            <div className="brokerage-tabs">
               <h2 className="brokerage-tab">
                   <Link 
                       to="/price/equity" 
                       className={`brokerage-link ${isActive('/price/equity') ? 'active' : ''}`}
                   >
                       Equity
                   </Link>
               </h2>
               <h2 className="brokerage-tab">
                   <Link 
                       to="/price/currency" 
                       className={`brokerage-link ${isActive('/price/currency') ? 'active' : ''}`}
                   >
                       Currency
                   </Link>
               </h2>
               <h2 className="brokerage-tab">
                   <Link 
                       to="/price/commodity" 
                       className={`brokerage-link ${isActive('/price/commodity') ? 'active' : ''}`}
                   >
                       Commodity
                   </Link>
               </h2>
            </div>
        </div>
        </>
    );
}

export default Brokerage;


