import React from 'react';

function RightSection({rImg,head,about,link,lName}) {
    return ( 
        <>
                <div className="row p-5">
                    <div className="col-5 p-5 mb-5">
                        <div className="row">
                            <h3>{head}</h3>
                            <p className='text-muted'>{about}</p>
                        </div>
                            <a href={link} style={{ color: "#4394f0ff" }}>{lName} <i class="fa-solid fa-arrow-right"></i></a>              
                    </div>
                    <div className="col-7">
                        <img src={rImg} alt="console" style={{transform: "translate(0rem,-8rem)" }} />
                    </div>                    
                </div>
        </>
     );
}

export default RightSection;
