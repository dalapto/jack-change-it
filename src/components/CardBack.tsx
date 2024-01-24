import React from 'react';
import { CARDS_FOLDER } from '../constants';
import CardImage from './CardImage';

function CardBack({ deck, file = '.svg', ...dependencies }): React.JSX.Element {
	const src = `/${CARDS_FOLDER}/${deck}/back${file}`;
	return (
		<div className="flip-card-back unselectable">
			<CardImage src={src} {...dependencies} />
		</div>
	);
}

export default CardBack;
