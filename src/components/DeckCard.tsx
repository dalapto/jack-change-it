import React from "react";
import CardBack from "./CardBack";
import FlipCard from "./FlipCard";
// import { CARDS_FOLDER } from "../constants";

function DeckCard({ deck, value, suit, flipped = false, handleRemoveFromDeck, ...delegated }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(flipped);
	const [remove, setRemove] = React.useState(false);
	const card = `${value}${suit}`;
	delegated["id"] = card;

	function handleOnClick() {
		setIsFlipped(true);
		handleRemoveFromDeck();
	}

	// delegated.style = { rotate: `0 0 1 ${angle}deg`, width: "15vmax", height: "40vmin" };
	// const src = `/${CARDS_FOLDER}/${deck}/${card}${file}`;
	return (
		<FlipCard deck={deck} suit={suit} value={value} flipped={isFlipped} {...delegated} />
		// <div className="flip-card unselectable" onClick={delegated.onClick}>
		// 	<CardBack deck={deck} {...delegated} />
		// </div>
	);
}

export default DeckCard;
