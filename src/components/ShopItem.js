import PropTypes from 'prop-types';

function ShopItem({ product }) {

    const { name } = product;
    const { price } = product;
    const { color } = product;
    const { img } = product;

    return (
        <div className="product-list-item">
            <img className="product-list-img" src={img} />
            <h2 className="product-name">{name}</h2>
            <p>{color}</p>
            <p className="price">{"$" + price}</p>
            <button className="add-button">Add to cart</button>
        </div>
    )
}

ShopItem.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ShopItem;