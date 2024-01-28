import './App.css';
import React from 'react';
import Game from './components/Game';

function App() {
	return (
		<>
			<h1>Jack Change It</h1>
			<div className="App">
				{/* <FlipCard deck={DECKS.Atlas} suit="S" value="11"  flipped={flipped} onClick={}/> */}
				{/* <FlipCard deck={DECKS.Formin} suit="C" value="12" /> */}
				{/* <FlipCard deck={DECKS.Kennard} suit="H" value="13" /> */}
				<Game />
			</div>
		</>
	);
}

export default App;
