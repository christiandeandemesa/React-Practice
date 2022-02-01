import React from "react";
// Imports a picture.
import profile from "../images/Selfie 6-14.jpg";
import styles from "../styles/Main.module.scss";

function Main() {
    return (
        // All things returned in a component must be within one parent tag.
        <div id={styles.body}>
            <div id={styles.body_left}>
                {/* Notice profile calls on the picture that was imported */}
                <img src={profile} alt="Profile Picture" className={styles.profile_icon}/>
            </div>
            <div id={styles.body_right}>
                <div id={styles.header}>
                    <h1 className={styles.title}>Christian Demesa</h1>
                    <h2 className={styles.header_info}>Frontend and MERN Developer</h2>
                    <p className={styles.header_info}>christiandeandemesa.github.com</p>
                </div>
                <div id={styles.about}>
                    <h2 className={styles.title}>About</h2>
                    <p className={styles.main_info}>I am an aspiring developer with experience in frontend design, and Java, MERN, and Python applications. However, I have more experience in frontend and MERN.</p>
                </div>
                <div id={styles.interests}>
                    <h2 className={styles.title}>Interests</h2>
                    <p className={styles.main_info}>Classically trained pianist. Hobby Chess Player. Origami Folder. Foreign Language Learner. Coding Ninja.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;