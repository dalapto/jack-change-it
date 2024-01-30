import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import "./FlipCard.css";

function FlipCard({ deck, suit, value, frontShown = true, handleOnClick, ...delegated }): React.JSX.Element {
	const [showFront, setShowFront] = React.useState(frontShown);
	const [flipInProgress, setFlipInProgress] = React.useState(false);

	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	React.useEffect(() => {
		function waitForFlip() {
			setTimeout(() => {
				handleOnClick();
				setFlipInProgress(false);
			}, 900);
		}
		if (showFront != frontShown) waitForFlip();
	}, [showFront, frontShown, handleOnClick]);

	function handleFlip() {
		if (flipInProgress) {
			return; // can't flip repeatedly to break effect
		}
		setFlipInProgress(true);
		setShowFront((value) => {
			return !value;
		});
	}

	return (
		<div {...delegated} className={`flip-card${!showFront ? " flipped" : ""}`} id={`${deck}_${value}${suit}`} onClick={handleFlip}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default FlipCard;
