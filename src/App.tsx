import "./App.css";
import React from "react";
import FlipCard from "./components/FlipCard";
import { DECKS } from "./constants";
import JokerCard from "./components/JokerCard";
import RandomJokerCard from "./components/RandomJokerCard";
import Deck from "./components/Deck";
import Pile from "./components/Pile";
import { CardCollection } from "./components/types";

function App() {
	const samplePile: CardCollection = [
		{ deck: DECKS.Formin, suit: "C", value: "1" },
		{ deck: DECKS.Atlas, suit: "S", value: "6" },
		{ deck: DECKS.Kennard, suit: "S", value: "9" },
	];

	const sampleDeck: CardCollection = [
		{ deck: DECKS.Formin, suit: "D", value: "13" },
		{ deck: DECKS.Atlas, suit: "H", value: "12" },
		{ deck: DECKS.Kennard, suit: "D", value: "1" },
	];
	const [pile, setPile] = React.useState<CardCollection>(samplePile);
	const [deck, setDeck] = React.useState<CardCollection>(sampleDeck);

	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				{/* <FlipCard deck={DECKS.Atlas} suit="S" value="11"  flipped={flipped} onClick={}/> */}
				{/* <FlipCard deck={DECKS.Formin} suit="C" value="12" /> */}
				{/* <FlipCard deck={DECKS.Kennard} suit="H" value="13" /> */}
				<Pile cards={pile} setCards={setPile} />
				<Deck cards={deck} setCards={setDeck} />
			</div>
		</>
	);
}

export default App;
