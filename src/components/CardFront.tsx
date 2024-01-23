import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function CardFront({ deck, value, suit, ...dependencies }): React.JSX.Element {
	const card = `${value}${suit}`;
	dependencies['id'] = card;
	const src = `/${CARDS_FOLDER}/${deck}/${card}.svg`;
	return (
		<div className="flip-card-front unselectable">
			<CardImage src={src} {...dependencies} />
		</div>
	);
}

export default CardFront;
