import React from 'react';
import CardFront from './CardFront';

function CardPile({ cards }): React.JSX.Element {
	return (
		<>
			{cards.map(({ deck, suit, value }) => {
				return <CardFront deck={deck} suit={suit} value={value} />;
			})}
		</>
	);
}

export default CardPile;
