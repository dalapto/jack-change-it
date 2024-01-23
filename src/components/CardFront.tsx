import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function CardFront({ deck, value, suit, ...dependencies }): React.JSX.Element {
	dependencies['className'] = 'front-card';
	const card = `${value}${suit}`;
	dependencies['id'] = card;
	const src = `/${CARDS_FOLDER}/${deck}/${card}.svg`;
	return <CardImage src={src} {...dependencies} />;
}

export default CardFront;
