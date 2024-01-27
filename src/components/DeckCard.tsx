import React from 'react';
import FlipCard from './FlipCard';
// import { CARDS_FOLDER } from "../constants";

function DeckCard({ deck, value, suit, handleRemoveFromDeck, ...delegated }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(true);
	const card = `${value}${suit}`;
	delegated['id'] = card;

	React.useEffect(() => {
		function waitForFlip() {
			setTimeout(() => {
				handleRemoveFromDeck();
			}, 900);
		}

		if (!isFlipped) waitForFlip();
	}, [isFlipped]);

	function handleOnClick() {
		console.log('DECK');
		setIsFlipped(false);
	}

	return (
		<div className="flip-card-front unselectable" onClick={handleOnClick}>
			<FlipCard isFlipped={isFlipped} deck={deck} suit={suit} value={value} {...delegated} />
		</div>
	);
}

export default DeckCard;
