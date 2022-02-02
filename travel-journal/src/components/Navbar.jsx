import React from 'react';
import globe from '../images/globe.png';

function Navbar() {
    return (
        <nav>
            <div>
                <img src={globe} alt={'globe'}/>
                <h1>my travel journal</h1>
            </div>
        </nav>
    )
}

export default Navbar;