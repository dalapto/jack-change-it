import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function PileCard({ deck, value, suit, file = '.svg', angle, ...dependencies }): React.JSX.Element {
	const card = `${value}${suit}`;
	dependencies['id'] = card;
	dependencies.style = { rotate: `0 0 1 ${angle}deg`, width: '15vmax', height: '40vmin' };
	const src = `/${CARDS_FOLDER}/${deck}/${card}${file}`;
	return (
		<div className="flip-card-front unselectable">
			<CardImage src={src} {...dependencies} />
		</div>
	);
}

export default PileCard;
