import React from "react";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import "./FlipCard.css";

function FlipCard({ deck, suit, value, isFlipped, ...delegated }): React.JSX.Element {
	const front = <CardFront deck={deck} suit={suit} value={value} />;
	const back = <CardBack deck={deck} suit={suit} value={value} />;

	return (
		<div className={`flip-card ${isFlipped ? "flipped" : ""}`} id={`${deck}_${value}${suit}`} onClick={delegated.onClick} {...delegated}>
			<div className="flip-card-inner">
				{front}
				{back}
			</div>
		</div>
	);
}

export default FlipCard;
