import React from "react";
import CardFront from "./CardFront";
import "./FlipCard.css";

function PlayedCard({ deck, suit, value, ...delegated }): React.JSX.Element {
	const front = <CardFront deck={deck} suit={suit} value={value} />;

	return (
		<div className="flip-card-front" id={`${deck}_${value}${suit}`} style={delegated.style} {...delegated}>
			{front}
		</div>
	);
}

export default PlayedCard;
