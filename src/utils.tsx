export function range(min: number, max: number, step = 1): number[] {
	const list: number[] = [];
	while (min < max + 1) {
		list.push(min);
		min = min + step;
	}
	return list;
}

function randomIndex(list) {
	return Math.floor(Math.random() * list.length);
}

export function getRandomItem(dictionary, currentItem = "") {
	const keyList = Object.keys(dictionary);
	let randomItem = currentItem;
	while (randomItem == currentItem) {
		const index = randomIndex(keyList);
		const key = keyList[index];
		randomItem = dictionary[key];
	}
	return randomItem;
}

function pickRandomCard(possibleCards) {
	// choose r = random index in range of possible list
	// const pickedCard = possibleCards[r]
	// remove possibleCards[r] as possible card
	return; // picked card
}

function pickHand(shuffledCards, cardsToTake) {
	const hand = shuffledCards.splice(0, cardsToTake);
	return hand;
}

// fisher-yates
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleDeck(possibleCards) {
	for (let i = possibleCards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[possibleCards[i], possibleCards[j]] = [possibleCards[j], possibleCards[i]];
	}
}
