import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import "./FlipCard.css";

function FlipCard({ deck, suit, value, flipped, setFlipped, ...delegated }): React.JSX.Element {
	// const [isFlipped, setIsFlipped] = React.useState(flipped);
	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	// function handleFlip() {
	// 	setIsFlipped((value) => {
	// 		return !value;
	// 	});
	// }

	return (
		<div className={`flip-card ${flipped ? "flipped" : ""}`} id={`${deck}_${value}${suit}`} onClick={delegated.onClick}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default FlipCard;
