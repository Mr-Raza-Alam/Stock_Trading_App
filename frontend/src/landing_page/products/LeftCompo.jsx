import React from 'react';

function LeftSection({ lImg, head, about, link1,lName1,link2,lName2, gPlay, aStore }) {
    return (
        <>
                <div className="row p-5">
                    <div className="col-7">
                        <img src={lImg} alt="kite"/>
                    </div>

                    <div className="col-5 p-5">
                        <div className="row">
                            <h3>{head}</h3>
                            <p className='text-muted'>{about}</p>
                        </div>

                        {link1 && link2 ? (
                            <div className="row link" style={{ display: "block"}}>
                                <a href={link1} style={{ color: "#4394f0ff" }}>
                                    {lName1} <i className="fa-solid fa-arrow-right"></i>
                                </a>
                                <a href={link2} style={{ color: "#4394f0ff" }}>
                                    {lName2} <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        ) : link1 ? (
                            <a href={link1} style={{ color: "#4394f0ff" }}>
                                {lName1} <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        ) : null
                      }

                        <div className="store" style={{ marginTop: "2rem" }}>
                            <a href={link1} target='main'><img src={gPlay} alt="google play" style={{ width: "36%" }} /></a>
                            <a href={link2} target='_blank'><img src={aStore} alt="App Store" style={{ width: "35%", marginLeft: "2rem" }} /></a>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default LeftSection;
