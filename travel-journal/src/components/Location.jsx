import React from 'react';
// Imports a local image and gives it a name to be called on (marker).
import marker from '../images/location-marker.png';
// Imports this component's stylesheet.
import styles from '../styles/Location.module.scss';

// Takes props as a parameter to get props passed into this component from App.js.
function Location(props) {
    return (
        <div id={styles.card}>
            {/* props is an object, place is an object passed into props, and img is a key in place which returns that key's value.
                require() is used to load a relative path toward an image. */}
            <div id={styles.left_card}>
                <img src={require(`../images/${props.place.img}`)} alt={'props.place.img'} id={styles.place}/>
            </div>
            <div id={styles.right_card}>
                <div id={styles.header}>
                    {/* Uses the local image we imported earlier. */}
                    <img src={marker} alt={'marker'} id={styles.marker}/>
                    <h2>{props.place.country}</h2>
                    <h2>View on Google Maps</h2>
                </div>
                <h3>{props.place.location}</h3>
                <p>{props.place.firstDate} - {props.place.secondDate}</p>
                <p>{props.place.description}</p>
            </div>
        </div>
    );
}

export default Location;