import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import './FlipCard.css';

function FlipCard({ deck, suit, value, frontShown = true, handleOnClick, ...delegated }): React.JSX.Element {
	const [showFront, setShowFront] = React.useState(frontShown);

	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	React.useEffect(() => {
		function waitForFlip() {
			setTimeout(() => {
				handleOnClick();
				console.log('HAU');
			}, 900);
		}
		if (showFront != frontShown) waitForFlip();
	}, [showFront]);
	return (
		<div
			className={`flip-card${!showFront ? ' flipped' : ''}`}
			id={`${deck}_${value}${suit}`}
			onClick={() => {
				setShowFront((value) => !value);
			}}
			{...delegated}
		>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default FlipCard;
