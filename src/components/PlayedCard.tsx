import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function PlayedCard({ deck, suit, value, frontShown = true, ...delegated }): React.JSX.Element {
	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	return (
		<div className="flip-card-front" id={`${deck}_${value}${suit}`} style={delegated.style} {...delegated}>
			{front}
			{back}
		</div>
	);
}

export default PlayedCard;
