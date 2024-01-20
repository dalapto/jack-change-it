import './App.css';
import React from 'react';
import PlayingCard from './components/PlayingCard';

function App() {
	// const true_path = "/assets/"
	const reactLogo = '/react.svg';
	const viteLogo = '/vite.svg';
	const joker = '/cards/jokers/Atlas_deck_joker_black.svg';
	const backImg = '/cards/Reverso_baraja_española_rojo.svg';
	const back = <img src={backImg} className="JokerImage" draggable="false" alt="Jocker" />;

	return (
		<>
			<h1>Vite + React</h1>
			<div className="App">
				<a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noopener noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<PlayingCard className="unselectable">
				<img src={joker} className="JokerImage" draggable="false" alt="Jocker" />
				{back}
			</PlayingCard>
		</>
	);
}

export default App;
