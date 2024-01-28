import React from 'react';
import { DECKS, JOKERS } from '../constants';
import { getRandomItem } from '../utils';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function RandomJokerCard(): React.JSX.Element {
	const [isFlipped, setIsFlipped] = React.useState(false);
	const [flipInProgress, setFlipInProgress] = React.useState(false);
	const [randomJoker, setRandomJoker] = React.useState(getRandomItem(JOKERS));
	const [randomDeck, setRandomDeck] = React.useState(getRandomItem(DECKS));

	const front = <CardFront deck="jokers" suit={''} value={randomJoker} file="" />;
	const back = <CardBack deck={randomDeck} />;

	React.useEffect(() => {
		function waitForFlip() {
			setTimeout(() => {
				setFlipInProgress(false);
			}, 900);
		}

		waitForFlip();
	}, [isFlipped]);

	function handleFlip() {
		if (flipInProgress) {
			return; // can't flip repeatedly to break effect
		}
		setFlipInProgress(true);

		if (isFlipped) {
			//if about to flip to front, randomise joker
			setRandomJoker((value) => {
				return getRandomItem(JOKERS, value);
			});
		}
		if (!isFlipped) {
			//if about to flip to back, randomise back
			setRandomDeck((value) => {
				return getRandomItem(DECKS, value);
			});
		}

		setIsFlipped((value) => {
			return !value;
		});
	}

	return (
		<div className={`flip-card ${isFlipped ? 'flipped' : ''}`} id={`jokers_${randomJoker}`} onClick={handleFlip}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default RandomJokerCard;
