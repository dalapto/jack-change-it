import React from 'react';
import FlipCard from './FlipCard';

function PileCard({ deck, value, suit, angle, handleRemoveFromPile, ...delegated }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const [flipInProgress, setFlipInProgress] = React.useState(false);
	const card = `${value}${suit}`;
	delegated['id'] = card;
	delegated.style = { rotate: `0 0 1 ${angle}deg`, width: '15vmax', height: '40vmin' };

	React.useEffect(() => {
		function waitForFlip() {
			setTimeout(() => {
				handleRemoveFromPile();
			}, 900);
		}
		if (isFlipped) waitForFlip();
	}, [isFlipped, handleRemoveFromPile]);

	function handleOnClick() {
		console.log('DECK');
		setIsFlipped(true);
	}

	return (
		<div className="flip-card-front unselectable" onClick={handleOnClick}>
			<FlipCard isFlipped={isFlipped} deck={deck} value={value} suit={suit} {...delegated} />
		</div>
	);
}

export default PileCard;
