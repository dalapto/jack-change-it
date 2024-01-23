import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function CardBack({ deck, suit, value, ...dependencies }): React.JSX.Element {
	dependencies['className'] = 'back-card';
	const card = `${value}${suit}`;
	dependencies['id'] = card;
	const src = `/${CARDS_FOLDER}/${deck}/back.svg`;
	return <CardImage src={src} {...dependencies} />;
}

export default CardBack;
