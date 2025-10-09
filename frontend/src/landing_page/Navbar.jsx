import React from 'react';
function Navbar() {
    return ( 
        <>
        <h1>Navbar Section</h1>
        <div className="nav-container">
            <div className="logo">
                <img src="" alt="logo" />
            </div>
            <div className="options">
                <a href="">signup</a>
                <a href="">about</a>
                <a href="">price</a>
                <a href="">product</a>
                <a href="">support</a>
                <button><i class="fa-solid fa-circle-user"></i></button>
            </div>
        </div>
        </>
     );
}

export default Navbar;
