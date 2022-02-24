// Imports useState from the react library.
import { useState } from "react";
// Imports the sass stylesheet.
import "./App.scss";
// Imports axios from the axios library.
import axios from "axios";

function App() {
	// Creates two states: pokemon to hold the name from the input, and pokemonData to hold the api data for that specific pokemon.
	const [pokemon, setPokemon] = useState('');
	const [pokemonData, setPokemonData] = useState([]);

	function handleChange(e) {
		/*
		e stands for event.
		e.target will return the html element that triggered the event (e.g. <input...>).
		e.target.value is the pokemon state (e.g. <input value={pokemon}>).
		.toLowerCase() sets the string in pokemon state to all lowercase letters because the pokemon names in the API call are all 
		lowercase.
		setPokemon() takes whatever is in the parentheses and makes it the value of the pokemon state.
		*/
		setPokemon(e.target.value.toLowerCase());
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
			const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
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

	return (
		<div>
			{/* When this form is submitted, it runs the handleSubmit function. */}
			<form onSubmit={handleSubmit}>
				<input
					// Defines the input as a single-line text field.
					type='text'
					name='pokemon'
					// Whenever the text in the input changes, it runs the handleChange function.
					onChange={handleChange}
					// Shows the string in the input if it is empty.
					placeholder='Pokemon Name'
					// Value is the pokemon state.
					value={pokemon}
				/>
				{/* <button></button> acts like <input type='submit> in React. */}
				<button>Search for Pokemon</button>
			</form>

			{/* Maps over the one element in the pokemonData state to create . */}
			{pokemonData.map(data => {
				console.log(data);
				return (
					// Gives each child a unique key, and individual pokemon id's are used.
					<div key={data.id}>
						{/* Displays the pokemon's front sprite as the image. */}
						<img src={data.sprites.front_default} />
						<div>
							<div>
								<div>
									<div>Type 1</div>
									{/* Displays the pokemon's first ability. */}
									<div>{data.types[0].type.name}</div>
									<div>Type 2</div>
									{/* Displays the pokemon's second ability if it has one, and 'None' if it does not. */}
									<div>{data.types[1] !== undefined ? data.types[1].type.name : 'None'}</div>
								</div>
								<div>
									<div>Ability 1</div>
									{/* Displays the pokemon's ability/abilities. */}
									<div>{data.abilities[0].ability.name}</div>
									<div>Ability 2</div>
									<div>{data.types[0] !== undefined ? data.abilities[1].ability.name: 'None'}</div>
								</div>
								<div>
									<div>Sample Moveset</div>
									<div>
										<div>
											{/* Displays the pokemon's first four moves. */}
											<div>{data.moves[0].move.name}</div>
											<div>{data.moves[1].move.name}</div>
											<div>{data.moves[2].move.name}</div>
											<div>{data.moves[3].move.name}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default App;