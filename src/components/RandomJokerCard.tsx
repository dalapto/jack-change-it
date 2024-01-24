import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function RandomJokerCard({ colour }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);

	//pick random front
	const randomJoker = '';
	const front = <CardFront deck="jokers" suit={''} value={randomJoker} />;

	// pick random back
	const randomBack = '';
	const back = <CardBack deck={randomBack} />;

	function handleFlip() {
		//if is not flipped, randomise front again
		setIsFlipped((value) => {
			return !value;
		});
	}

	return (
		<div className={`flip-card ${isFlipped ? 'flipped' : ''}`} id={`jokers_${colour}`} onClick={handleFlip}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default RandomJokerCard;
