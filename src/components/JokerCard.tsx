import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function JokerCard({ deck, colour }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const front = <CardFront deck={deck} suit={colour} value={0} />;
	const back = <CardBack deck={deck} />;

	function handleFlip() {
		setIsFlipped((value) => {
			return !value;
		});
	}

	return (
		<div className={`flip-card ${isFlipped ? 'flipped' : ''}`} id={`${deck}_0${colour}`} onClick={handleFlip}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default JokerCard;
