import React from "react";
import PlayedCard from "./PlayedCard";

function Pile({ displayedCards, ...delegated }): React.JSX.Element {
	const [usedAngles, setUsedAngles] = React.useState({});
	const displayedCardKeys = displayedCards.map(({ deck, suit, value }) => `${deck}_${value}${suit}`);
	const possibleAngles = [3, 10, 353];

	function getUnusedAngle(deck, suit, value) {
		const key = `${deck}_${value}${suit}`;
		const updatedAngles = { ...usedAngles };

		for (const key of Object.keys(usedAngles)) {
			const keyExists = displayedCardKeys.includes(key);
			if (!keyExists) {
				delete updatedAngles[key];
			}
		}

		if (key in updatedAngles) {
			return updatedAngles[key];
		}
		for (const angle of possibleAngles) {
			if (!Object.values(updatedAngles).includes(angle)) {
				updatedAngles[key] = angle;
				setUsedAngles(updatedAngles);
				return angle;
			}
		}
	}

	return (
		<div className="card-pile">
			{displayedCards.map(({ deck, suit, value }, index) => {
				const angle = getUnusedAngle(deck, suit, value);
				delegated.style = { rotate: `0 0 1 ${angle}deg`, width: "15vmax", height: "40vmin", zIndex: displayedCards.length - index };
				return <PlayedCard frontShown={true} key={`${deck}_${value}${suit}`} deck={deck} suit={suit} value={value} {...delegated} />;
			})}
		</div>
	);
}

export default Pile;
