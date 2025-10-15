import React from 'react';
import '../../cssStyling/supportPage/HeroSection.css'

function Hero() {
    const handleTicketBtn = () => {
        window.open("https://kite.zerodha.com/connect/login?api_key=supportportal&sess_id=qXh6WyLayLxYEPOhyKZuWoIXPdK83oqO", '_blank');
    }

    return (
        <>
            <div className="p-5 mt-5 hero-sect">
                <div className="support-head">
                    <h1>Support Portal</h1>
                    <button className='btn btn-primary' onClick={handleTicketBtn}>My Tickets</button>
                </div>

                <div className="search-account">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" placeholder='Eg: How do I open my account, How do i activate F&O...'/>
                </div>
            </div>
        </>
    );
}

export default Hero;
