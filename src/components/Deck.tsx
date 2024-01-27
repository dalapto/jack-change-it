import React from "react";
import DeckCard from "./DeckCard";
import { range } from "../utils";

function Deck({ cards, setCards }): React.JSX.Element {
	function handleRemoveFromDeck() {
		const updatedPile = [...cards];
		updatedPile.pop();
		setCards(updatedPile);
	}

	return (
		<div className={`flip-card`} onClick={handleRemoveFromDeck}>
			<div className="flip-card-inner">
				{range(0, Math.min(1, cards.length - 1)).map((index) => {
					const { deck, suit, value } = cards[index];
					return <DeckCard key={`${deck}-${value}${suit}`} deck={deck} suit={suit} value={value} flipped={true} handleRemoveFromDeck={handleRemoveFromDeck} />;
				})}
			</div>
		</div>
	);
}

export default Deck;
