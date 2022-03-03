// Imports this component's CSS module.
import styles from './Die.module.scss';

// props are what we passed down from App.js.
function Die(props) {
    return (
        /*
        Example of using the CSS module class. 
        If the isHeld props is true, give it the dieFaceHeld class. If the isHeld props if false, give it the dieFace class.
        */ 
        <div className={props.isHeld ? styles.dieFaceHeld : styles.dieFace} onClick={props.holdDice}>
            {/* props.value is whatever we passed into the value keyword within the Die component in App.js. */}
            <h1>{props.value}</h1>
        </div>
    );
}

export default Die;