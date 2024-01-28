import React from 'react';
import FlipCard from './FlipCard';
import './CardGroup.css';

function CardGroup({ displayedCards, frontShown = true, handleOnClick, ...delegated }): React.JSX.Element {
	return (
		<div className="card-layer">
			{displayedCards.map(({ deck, suit, value }, index) => {
				delegated.style = { zIndex: displayedCards.length - index };
				return <FlipCard handleOnClick={handleOnClick} frontShown={frontShown} key={`${deck}-${value}${suit}`} deck={deck} suit={suit} value={value} {...delegated} />;
			})}
		</div>
	);
}

export default CardGroup;
