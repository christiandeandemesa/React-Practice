import styles from '../styles/Start.module.scss';

function Start() {
    return (
        <div id={styles.background}>
            <h1 id={styles.title}>Quizzical</h1>
            <p id={styles.description}>Hardcore Mythology Edition</p>
            <a href='/quizzical'><button id={styles.button}>Start quiz</button></a>
        </div>
    )
}

export default Start;