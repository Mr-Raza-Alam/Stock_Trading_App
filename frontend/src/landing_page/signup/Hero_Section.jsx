import React from 'react';
import { useState,useRef,useEffect } from 'react';
import signImg from '../../assets/signupImage.svg'
import miniLogo from '../../assets/Ind-mini-logo.png'
import '../../cssStyling/Signup/Hero_Section.css'
function Hero() {
     const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add OTP logic here
    };

    const toggleTooltip = () => {
        setShowTooltip(!showTooltip);
    };

    // Close tooltip when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setShowTooltip(false);
            }
        };

        if (showTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showTooltip]);
    return (
        <>
            <div className="p-5 mt-5 signupHero-sect">
                <div className="row mt-3 text-center">
                    <h1 className='fs-2'>Open a free demat and trading account online</h1>
                    <h1 className='fs-4 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h1>
                </div>
                <div className="row mt-5 p-5">
                    <div className="col col-left">
                        <img src={signImg} alt="signImg" />
                    </div>

        <div className="col col-right">
            <h1 className='signup-title'>Signup now</h1>
            <p className='signup-subtitle'>Or track your existing application</p>
            
            <form onSubmit={handleSubmit} className='signup-form'>
                <div className='mobile-input-container'>
                    <div className='country-code'   onClick={toggleTooltip} ref={tooltipRef}>
                        <img src={miniLogo} alt="India flag" className='flag-icon'/>
                        <span>+91</span>
                    </div>
                    <input 
                        type="tel" 
                        className='mobile-input'
                        placeholder='Enter your mobile number' 
                        maxLength="10"
                        pattern="[0-9]{10}"
                        required
                    />
                </div>
                <button className='btn btn-primary otp-button' type='submit'>
                    Get OTP
                </button>
            </form>
            
            <p className='terms-text'>
                By proceeding, you agree to the Zerodha{' '}
                <a href="#" className='link-text'>terms</a> &{' '}
                <a href="#" className='link-text'>privacy policy</a>
            </p>
            
            <hr className='divider'/>
            
            <p className='nri-text'>
                Looking to open NRI account?{' '}
                <a href="#" className='link-text'>Click here</a>
            </p>
        </div>    
                          </div>
            </div>
        </>
    );
}

export default Hero;
