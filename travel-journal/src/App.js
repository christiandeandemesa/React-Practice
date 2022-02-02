// Needed to use JSX.
import React from 'react';
// Simulates importing data from an API.
import data from './data';
// Imports the Navbar and Location components.
import Navbar from './components/Navbar';
import Location from './components/Location';
// Imports this file's stylesheet.
import './App.scss';

function App() {
  /*
  Creates a variable (placeElements) that maps over every object (place) in data.
  For every object in data, it renders a Location component where the unique key is the object's id (place.id), and a place prop that is one of the objects in data (place).
  */
  const placeElements = data.map(place => <Location key={place.id} place={place}/>);
  return (
    <div>
      <Navbar/>
      {/* placeElements will create three Location components with different data because data had three different objects to map over. */}
      {placeElements}
    </div>
  );
}

// Exports this file so, it can be imported in another file. 
export default App;