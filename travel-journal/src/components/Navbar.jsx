import React from 'react';
import globe from '../images/globe.jpg';
import styles from '../styles/Navbar.module.scss';

function Navbar() {
    return (
        <nav id={styles.navbar}>
            <div>
                <img src={globe} alt={'globe'} id={styles.navbar_img}/>
                <h1>my travel journal</h1>
            </div>
        </nav>
    )
}

export default Navbar;