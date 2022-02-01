import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Footer.module.scss";

function Footer() {
    return (
        <div id={styles.icons}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon}>Email</FontAwesomeIcon>
            <FontAwesomeIcon icon={faGithub} className={styles.icon}>Github</FontAwesomeIcon>
            <FontAwesomeIcon icon={faLinkedin} className={styles.icon}>Linkedin</FontAwesomeIcon>
        </div>
    );
}

export default Footer;