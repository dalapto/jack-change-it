import React from 'react';
import PlayedCard from './PlayedCard';

function Pile({ displayedCards, ...delegated }): React.JSX.Element {
	const [usedAngles, setUsedAngles] = React.useState({});
	const possibleAngles = [0, 5, 355];

	console.log(displayedCards);

	function getUnusedAngle(deck, suit, value) {
		const key = `${deck}-${value}${suit}`;
		const updatedAngles = { ...usedAngles };

		if (key in usedAngles) {
			return updatedAngles[key];
		}
		for (let angle of possibleAngles) {
			if (!Object.values(updatedAngles).includes(angle)) {
				updatedAngles[key] = angle;
				console.log(key);
				setUsedAngles(updatedAngles);
				return angle;
			}
		}
	}

	return (
		<div className="card-pile">
			{displayedCards.map(({ deck, suit, value }, index) => {
				const angle = getUnusedAngle(deck, suit, value);
				delegated.style = { rotate: `0 0 1 ${angle}deg`, width: '15vmax', height: '40vmin', zIndex: displayedCards.length - index };
				return <PlayedCard frontShown={true} key={`${deck}-${value}${suit}`} deck={deck} suit={suit} value={value} {...delegated} />;
			})}
		</div>
	);
}

export default Pile;
