import PropTypes from 'prop-types';

function ShopCard({ product }) {

    const { name } = product;
    const { price } = product;
    const { color } = product;
    const { img } = product;
    const styles = {
        backgroundImage: "url(" + img + ")"
    }

    return (
        <div className="ShopCard" style={styles}>
            <div>
                <h2 className="product-name">{name}</h2>
                <p>{color}</p>
            </div>
            <div className="Price-sector">
                <p className="price">{"$" + price}</p>
                <button className="add-button">Add to cart</button>
            </div>
        </div>
    )
}

ShopCard.propTypes = {
    product: PropTypes.object.isRequired,
}

export default ShopCard;
