import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function FlipCard({ deck, suit, value }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	function handleFlip() {
		//if not flipped ->
		//	get/set next front image
		//	push/set next front image
		setIsFlipped((value) => {
			return !value;
		});
	}

	return (
		<div className={`unselectable flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
			<div className="flip-card-inner">
				<div className="flip-card-front">{front}</div>
				<div className="flip-card-back">{back}</div>
			</div>
		</div>
	);
}

export default FlipCard;
