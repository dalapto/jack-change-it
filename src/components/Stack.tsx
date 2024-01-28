import React from 'react';
import DeckCard from './StackCard';
import { range } from '../utils';

function Stack({ cards, setCards }): React.JSX.Element {
	const handleRemoveFromDeck = React.useCallback(() => {
		const updatedPile = [...cards];
		updatedPile.shift();
		setCards(updatedPile);
	}, [cards]);

	return (
		<div className={`flip-card`}>
			<div className="flip-card-inner">
				{range(0, Math.min(1, cards.length - 1)).map((index) => {
					const { deck, suit, value } = cards[index];
					return <DeckCard key={`${deck}-${value}${suit}`} deck={deck} suit={suit} value={value} handleRemoveFromDeck={handleRemoveFromDeck} />;
				})}
			</div>
		</div>
	);
}

export default Stack;
