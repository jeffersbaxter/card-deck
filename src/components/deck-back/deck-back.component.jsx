import './deck-back.styles.scss';

const DeckBack = ({ description, deckId }) => (
    <div>
        <p>{description}</p>
        <button>VIEW DECK</button>
    </div>
);

export default DeckBack;