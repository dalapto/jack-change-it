import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function CardBack({ deck, suit, value, ...dependencies }): React.JSX.Element {
	const card = `${value}${suit}`;
	dependencies['id'] = card;
	const src = `/${CARDS_FOLDER}/${deck}/back.svg`;
	return (
		<div className="flip-card-back unselectable">
			<CardImage src={src} {...dependencies} />
		</div>
	);
}

export default CardBack;
