
import "./App.css";
import Pokedex from "./Pokedex";
import pokemons from "./pokemons";

function App() {
	return (
		<div className="App">
			<h1>Pokedex</h1>
      <Pokedex indexed_pokemons={pokemons}/>

			<footer className="App-footer">
				<section className="footer-Content">
					<p>© Phedias A.M. All Rights Reserved</p>
				</section>
			</footer>
		</div>
	);
}

export default App;
