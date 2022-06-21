import React from 'react';
import './App.css';
import Deck from './components/deck/deck.component';

import DECK_LIST from './card-data.json';
import DeckBack from './components/deck-back/deck-back.component';

function App() {
  const deckList = DECK_LIST;

  return (
    <div className="dashboard-container">
      <p className='main-description'>Select a deck to view</p>
      <div className='deck-list-container'>
        {deckList.map(deck => <Deck key={deck.deckId} title={deck.title} back={<DeckBack description={deck.description} />} />)}
      </div>
    </div>
  );
}

export default App;
