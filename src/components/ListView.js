import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {

    const { items } = props;

    return (
        <div className="ListView">
            {items.map((o, index) => (<ShopItem key={o.name + o.color} product={o} />))}
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}

export default ListView;