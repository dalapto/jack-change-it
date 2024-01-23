import './App.css';
import React from 'react';
import FlipCard from './components/FlipCard';
import CardImage from './components/CardImage';
import { DECKS } from './constants';

function App() {
	// const true_path = "/assets/"
	const reactLogo = '/react.svg';
	const viteLogo = '/vite.svg';
	const joker1 = '/cards/jokers/Atlas_deck_joker_black.svg';
	const joker2 = '/cards/jokers/Cards-Joker-Red.svg';
	const joker3 = '/cards/jokers/JK-black.svg';
	const joker4 = '/cards/jokers/Joker_black02.svg';
	const backImg = '/cards/Reverso_baraja_española_rojo.svg';

	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<FlipCard deck={DECKS.Atlas} suit="S" value="2" />
			<FlipCard deck={DECKS.Formin} suit="C" value="12" />
			<FlipCard deck={DECKS.Kennard} suit="H" value="12" />
		</>
	);
}

export default App;
