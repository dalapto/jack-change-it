import './App.css';
import React from 'react';
import FlipCard from './components/FlipCard';
import { DECKS } from './constants';

function App() {
	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				<FlipCard deck={DECKS.Atlas} suit="S" value="11" />
				<FlipCard deck={DECKS.Formin} suit="C" value="12" />
				<FlipCard deck={DECKS.Kennard} suit="H" value="13" />
			</div>
		</>
	);
}

export default App;
