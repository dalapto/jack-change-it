import './App.css';
import React from 'react';
import FlipCard from './components/FlipCard';
import { DECKS } from './constants';
import JokerCard from './components/JokerCard';
import RandomJokerCard from './components/RandomJokerCard';
import PileCard from './components/PileCard';
import CardPile from './components/Pile';

function App() {
	const samplePile = [
		{ deck: DECKS.Formin, suit: 'C', value: '1' },
		{ deck: DECKS.Atlas, suit: 'H', value: '6' },
		{ deck: DECKS.Kennard, suit: 'S', value: '9' },
	];
	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				<FlipCard deck={DECKS.Atlas} suit="S" value="11" />
				<FlipCard deck={DECKS.Formin} suit="C" value="12" />
				<FlipCard deck={DECKS.Kennard} suit="H" value="13" />
				<CardPile cards={samplePile} />
			</div>
		</>
	);
}

export default App;
