import React from "react";
import PileCard from "./PileCard";
import { range } from "../utils";

function Pile({ cards, setCards }): React.JSX.Element {
	function handleRemoveFromPile() {
		const updatedPile = [...cards];
		updatedPile.pop();
		setCards(updatedPile);
		console.log("PILE POP");
		console.log(cards);
	}

	return (
		<div className={`flip-card`}>
			<div className="flip-card-inner">
				{range(0, Math.min(2, cards.length - 1)).map((index) => {
					const { deck, suit, value } = cards[index];
					const angle = index == 2 ? 355 : index * 5; // index 0 -> 0 degrees, 1 -> 5 degrees and 2 -> 355 degrees.
					return <PileCard key={`${deck}-${value}${suit}`} deck={deck} suit={suit} value={value} angle={angle} handleRemoveFromPile={() => handleRemoveFromPile()} />;
				})}
			</div>
		</div>
	);
}

export default Pile;
