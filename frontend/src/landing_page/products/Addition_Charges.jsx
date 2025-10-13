import React from 'react';
function AdditionCharges({title1,title2,p1,p2,p3,p4,b1,b2,b3,b4}) {
    return (
        <>
        <div className="container p-5">
            <div className="row border p-5">
              <h2>Type of account</h2>
              <h2>Charges</h2>
            </div>
            <div className="row border p-5">
                <div className="row">
                    <p>Online account</p>
                    <button>Free</button>
                </div>
                <div className="row">
                    <p>Offline account</p>
                    <button>Free</button>                    
                </div>
                <div className="row">
                    <p>NRI account (offline only)</p>
                    <p>&#8377;500</p>
                </div>
                <div className="row">
                    <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
                    <p>&#8377;500</p>                    
                </div>
            </div>
        </div>
        </>
      );
}

export default AdditionCharges;
