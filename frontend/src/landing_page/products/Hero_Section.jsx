import React from 'react';

function Hero() {
    return (
        <>
        <div className="container mt-5 p-5">
            <div className="row text-center text-muted mt-3 p-5">
                <h1 className='fs-3'>Zerodha Products</h1>
                <p className='fs-5 p-2'>Sleek, modern, and intuitive trading platforms</p>
                <p style={{fontSize:"18px"}}>Check out our <a href="https://zerodha.com/investments" style={{color:"#4394f0ff"}} target='_blank'>investment offerings <i class="fa-solid fa-arrow-right"></i></a></p>
                <div style={{ height: "3rem" }}></div>
            </div> <hr />
        </div>
        </>
    );
}

export default Hero;
