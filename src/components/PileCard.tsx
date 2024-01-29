import React from "react";
import CardFront from "./CardFront";
import "./FlipCard.css";

function PileCard({ deck, suit, value, ...delegated }): React.JSX.Element {
	const front = <CardFront deck={deck} suit={suit} value={value} />;

	return (
		<div {...delegated} className="flip-card-front" id={`${deck}_${value}${suit}`} style={delegated.style}>
			{front}
		</div>
	);
}

export default PileCard;
