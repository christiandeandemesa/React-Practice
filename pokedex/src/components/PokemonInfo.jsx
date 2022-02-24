// props is an object where the variable passed into it from App.js (e.g. sprite) is the key, and its value (e.g. pokemon.sprites.front_default) is the value.
function PokemonInfo(props) {
    // Destructures the keys from props. Allows us to use just the name (e.g. sprite) instead of the object and a key (e.g. props.sprite)
    const {sprite, type1, type2, ability1, ability2, move1, move2, move3, move4} = props;
    return (
        <main>
            <div>
                {/* Notice that to use the props, we wrap it in curly brackets. */}
                <img src={sprite}/>
            </div>
            <div>
                <div>
                    <p>Type 1: {type1}</p>
                    <p>Type 2: {type2}</p>
                </div>
                <div>
                    <p>Ability 1: {ability1}</p>
                    <p>Ability 2: {ability2}</p>
                </div>
                <div>
                    <p>Sample Moveset</p>
                    <p>{move1}</p>
                    <p>{move2}</p>
                    <p>{move3}</p>
                    <p>{move4}</p>
                </div>
            </div>
        </main> 
    );
}

export default PokemonInfo;