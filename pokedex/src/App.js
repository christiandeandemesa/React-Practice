// Imports useState from the react library.
import { useState } from 'react';
// Imports PokeInfo component.
import PokemonInfo from './components/PokemonInfo';
// Imports the sass stylesheet.
import './App.scss';
// Imports axios from the axios library.
import axios from 'axios';

function App() {
	// Creates two states: pokemonName to hold the name from the input, and pokemonData to hold the api data for that specific pokemon.
	const [pokemonName, setPokemonName] = useState('');
	const [pokemonData, setPokemonData] = useState([]);

	function handleChange(e) {
		/*
		e stands for event.
		e.target will return the html element that triggered the event (e.g. <input...>).
		e.target.value is the pokemon state (e.g. <input value={pokemon}>).
		.toLowerCase() sets each individual character in the input to be lowercase because the API call needs the pokemon state to have the 
		value be lowercase.
		setPokemonName() takes whatever is in the parentheses and makes it the value of the pokemon state.
		*/
		setPokemonName(e.target.value.toLowerCase());
	}

	function handleSubmit(e) {
		// Stops the component from re-rendering and refreshing the page.
		e.preventDefault();
		// Runs the getPokemon function.
		getPokemon();
	}

	// The async keyword guarantees the function always return a promise.
	async function getPokemon() {
		const apiData = [];
		try {
			// This is the API call using string interpolation to grab the value in pokemon state (${pokemon}) to get different pokemon.
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
			/*
			The await keyword blocks the rest of the code from running until the following function (axios.get()) returns a promise.
			axios.get() performs a GET request on the given url.
			*/
			const res = await axios.get(url);
			/*
			You can see what the API return by using: console.log(JSON.stringify(res));
			res.data is used because all of the information we want is the value related to the data key, then adds it as an element to
			apiData.
			*/
			apiData.push(res.data);
			// setPokemonData() takes the array and makes it the value of the pokemonData state.
			setPokemonData(apiData);
		} 
		// If the GET request fails (e.g. words that are not pokemon), logs the error in the console.
		catch(err) {
			console.log(err);
		}
	}

	/* Creates a variable (pokemonElement) that maps over every object (pokemon) in the array in the pokemonData state.
	   Renders the PokemonInfo component that passes props (e.g. sprite is the image of the pokemon from the API). */
	const pokemonElement = pokemonData.map(pokemon => <PokemonInfo 
		// Each sibling component needs to have a unique key from each other.
		key={pokemon.id}
		sprite={pokemon.sprites.front_default}
		type1={pokemon.types[0].type.name}
		// If pokemon.types[1] exists in the API, pass its data. If it doesn't exist pass 'None' through props.
		type2={pokemon.types[1] !== undefined ? pokemon.types[1].type.name: 'None'}
		ability1={pokemon.abilities[0].ability.name}
		ability2={pokemon.types[0] !== undefined ? pokemon.abilities[1].ability.name: 'None'}
		move1={pokemon.moves[0].move.name}
		move2={pokemon.moves[1].move.name}
		move3={pokemon.moves[2].move.name}
		move4={pokemon.moves[3].move.name}
	/>);

	return (
		<div>
			{/* When this form is submitted, it runs the handleSubmit function. */}
			<form onSubmit={handleSubmit}>
				<input
					// Defines the input as a single-line text field.
					type='text'
					name='pokemonName'
					// Whenever the text in the input changes, it runs the handleChange function.
					onChange={handleChange}
					// Shows the string in the input if it is empty.
					placeholder='Pokemon Name'
					// Value is the pokemon state.
					value={pokemonName}
				/>
				{/* <button></button> acts like <input type='submit> in React. */}
				<button>Search for Pokemon</button>
			</form>
			{pokemonElement}
		</div>
	);
};

// Exports this component, so it can be imported elsewhere.
export default App;