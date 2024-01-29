import "./Game.css";
import React from "react";
import { DECKS } from "./../constants";
import Pile from "./Pile";
import { CardCollection } from "./types";
import CardGroup from "./CardGroup";

function Game() {
	const samplePile: CardCollection = [
		{ deck: DECKS.Formin, suit: "C", value: "1" },
		{ deck: DECKS.Atlas, suit: "S", value: "6" },
		{ deck: DECKS.Kennard, suit: "S", value: "9" },
		{ deck: DECKS.Formin, suit: "C", value: "6" },
		{ deck: DECKS.Atlas, suit: "S", value: "7" },
		{ deck: DECKS.Formin, suit: "C", value: "10" },
	];

	const sampleDeck: CardCollection = [
		{ deck: DECKS.Formin, suit: "D", value: "13" },
		{ deck: DECKS.Atlas, suit: "H", value: "12" },
		{ deck: DECKS.Kennard, suit: "D", value: "11" },
		{ deck: DECKS.Kennard, suit: "H", value: "13" },
		{ deck: DECKS.Kennard, suit: "H", value: "12" },
	];
	const [pile, setPile] = React.useState<CardCollection>(samplePile);
	const [deck, setDeck] = React.useState<CardCollection>(sampleDeck);
	const displayedPile = pile.slice(0, 3);
	const displayedDeck = deck.slice(0, 2);

	function takeCard() {
		if (deck.length < 1) {
			return;
		}
		const updatedDeck = [...deck];
		const takenCard = updatedDeck.shift();
		setDeck(updatedDeck);
		const updatedPile = [...pile];
		updatedPile.unshift(takenCard!);
		setPile(updatedPile);
	}

	return (
		<>
			<div className="Game">
				{/* <FlipCard deck={DECKS.Atlas} suit="S" value="11"  flipped={flipped} onClick={}/> */}
				{/* <FlipCard deck={DECKS.Formin} suit="C" value="12" /> */}
				{/* <FlipCard deck={DECKS.Kennard} suit="H" value="13" /> */}
				{displayedDeck.length > 0 && <CardGroup handleOnClick={takeCard} displayedCards={displayedDeck} frontShown={false} />}
				{displayedPile.length > 0 && <Pile displayedCards={displayedPile} />}
			</div>
		</>
	);
}

export default Game;
