import React from "react";
import FlipCard from "./FlipCard";

function PileCard({ deck, value, suit, angle, flipped, setFlipped, ...delegated }): React.JSX.Element {
	const card = `${value}${suit}`;
	delegated["id"] = card;
	delegated.style = { rotate: `0 0 1 ${angle}deg`, width: "15vmax", height: "40vmin" };
	// const src = `/${CARDS_FOLDER}/${deck}/${card}${file}`;
	return (
		<div className="flip-card-front unselectable" onClick={delegated.onClick}>
			<FlipCard flipped={flipped} setFlipped={setFlipped} deck={deck} value={value} suit={suit} {...delegated} />
		</div>
	);
}

export default PileCard;
