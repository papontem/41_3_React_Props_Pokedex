function Pokecard(props) {
	return (
		<div className="Pokecard">
			{/* This is a Pokecard */}
			{/* id, name, type, base_experience, and img */}
			<div className="Pokecard-pokemon-name" style={{ color: "blue" }}>
				<b>{props.name}</b>
			</div>
			<div className="Pokecard-pokemon-info">
				Type(s): {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
				<br />
				EXP: {props.base_experience}
			</div>
			<img src={props.img_url} alt={`png of a ${props.name}`}></img>
		</div>
	);
}

export default Pokecard;
