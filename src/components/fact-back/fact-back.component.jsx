import './fact-back.styles.scss';

const FactBack = ({ detailList }) => (
    <div className='fact-back-container'>
        {detailList.map(detail => <li key={detail.factId} className='fact-container'>{detail.fact}</li>)}
    </div>
);

export default FactBack;