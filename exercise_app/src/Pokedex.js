// Pokedex react component that is provided, via props, an array of objects describing different pokemon, and renders a sequence of Pokecard components.
import Pokecard from "./Pokecard";

function Pokedex({ indexed_pokemons}) {
	return (
		<div className="Pokedex">
            {/* <p>this is a pokedex</p> */}
			{/* pokecards go here */}
			{indexed_pokemons.map((i) => (
				<Pokecard
					key={i.id}
					name={i.name}
					type={i.type}
					base_experience={i.base_experience}
					img_url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i.id}.png`}
				/>
			))}
		</div>
	);
}

export default Pokedex;
