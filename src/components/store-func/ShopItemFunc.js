import React from 'react';
import PropTypes from 'prop-types';

function ShopItemFunc({ item }) {
  const {
    rand, title, description, descriptionFull, price, currency,
  } = item;
  return (
    <div className="main-content">
      <h2>{rand}</h2>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="description">
        {descriptionFull}
      </div>
      <div className="highlight-window mobile"><div className="highlight-overlay" /></div>
      <div className="divider" />
      <div className="purchase-info">
        <div className="price">{currency}{price}.00</div>
        <button type="button">Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.shape({
    rand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.string,
    currency: PropTypes.string,
  }).isRequired,
};

export default ShopItemFunc;
