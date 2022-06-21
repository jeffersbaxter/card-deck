import Card from '../card/card.component';
import './deck.styles.scss';

const Deck = ({ title, back }) => (
    <div className='deck-container'>
        <div className='card-list-container'>
            <Card title={title} cardBack={back} />
        </div>
    </div>
);

export default Deck;