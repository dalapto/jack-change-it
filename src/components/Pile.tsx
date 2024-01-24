import React from 'react';
import CardFront from './CardFront';
import PileCard from './PileCard';

function CardPile({ cards }): React.JSX.Element {
	return (
		<div className={`flip-card`}>
			<div className="flip-card-inner">
				{cards.map(({ deck, suit, value }, index) => {
					const modIndex = index % 3; // we want to switch between 3 angles, so index 3 has same effect as 0 etc
					const angle = modIndex == 2 ? 355 : modIndex * 5; // modIndex 0 = 0 degrees, 1 = 5 degrees and 2 = 355 degrees.
					return <PileCard deck={deck} suit={suit} value={value} angle={angle} />;
				})}
			</div>
		</div>
	);
}

export default CardPile;
