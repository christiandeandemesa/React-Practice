// Allows us to use JSX.
import React from "react";
// Allows us to use the FontAwesomeIcon tag.
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// Allows us to use FontAwesome icons.
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
// Imports this component's scss module.
import styles from "../styles/Footer.module.scss";

function Footer() {
    return (
        // Notice how we call the name of our import first (styles), then the name for the id (icons).
        <div id={styles.icons}>
            {/* Notice it is className instead of class */}
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}>Email</FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}>Github</FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}>Linkedin</FontAwesomeIcon>
        </div>
    );
}

// Exports the Footer component.
export default Footer;