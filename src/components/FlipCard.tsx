import React from 'react';
import './FlipCard.css';

function FlipCard({ children }): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);
	React.useEffect(() => {}, []);
	const [cardFront, setCardFront] = React.useState(children[0]);
	const [cardBack, setCardBack] = React.useState(children[1]);

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
				<div className="flip-card-front">{cardFront}</div>
				<div className="flip-card-back">{cardBack}</div>
			</div>
		</div>
	);
}

export default FlipCard;
