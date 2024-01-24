import './App.css';
import React from 'react';
import FlipCard from './components/FlipCard';
import { DECKS } from './constants';
import JokerCard from './components/JokerCard';

function App() {
	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				<FlipCard deck={DECKS.Atlas} suit="S" value="11" />
				<FlipCard deck={DECKS.Formin} suit="C" value="12" />
				<FlipCard deck={DECKS.Kennard} suit="H" value="13" />
				<JokerCard deck={DECKS.Atlas} colour="R" />
				<JokerCard deck={DECKS.Formin} colour="B" />
				<JokerCard deck={DECKS.Kennard} colour="B" />
			</div>
		</>
	);
}

export default App;
