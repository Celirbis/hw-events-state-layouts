import PropTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {

    const { cards } = props;

    return (
        <div className="CardsView">
            {cards.map((o, index) => (<ShopCard key={o.name + o.color} product={o} />))}
        </div>
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}

export default CardsView;