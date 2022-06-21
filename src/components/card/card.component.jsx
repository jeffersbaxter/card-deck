import './card.styles.scss';

const Card = ({ title, cardBack }) => (
    <div className='card-container-outer'>
        <div className='card-container-inner'>
            <div className='side front'>
                <h3>{ title }</h3>
            </div>
            <div className='side back'>
                <ul className='detail-list-container'>
                    {cardBack}
                </ul>
            </div>
        </div>
    </div>
);

export default Card;