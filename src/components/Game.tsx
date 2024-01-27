import React from "react";
import CardDeck from "./Deck";
import CardHand from "./Hand";
import CardPile from "./Pile";

function CardGame({ playerCount = 1, deckCount = 1, cards = 5 }): React.JSX.Element {
	const hands = {}; // {playerId: Card[]} list of cards per player
	const deck = []; // cards to pick from
	const pile = []; // list of plaued cards
	const allCards = [];

	// each card must have unique id
	// pips_suit_deck -> 4C_atlas

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

	return (
		<>
			<CardPile cards={pile} />
			<CardDeck cards={deck} />;
			{/* {Object.entries(hands).map(({ id, cards }) => {
				<CardHand playerId={id} cards={cards} />;
			})} */}
			<></>
		</>
	);
}

export default CardGame;
