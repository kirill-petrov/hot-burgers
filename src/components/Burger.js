import React from 'react';

class Burger extends React.Component {

  render() {
    const {
      image,
      name,
      price,
      desc,
      status
    } = this.props.details;
    const { index, addToOrder } = this.props;
    const isAvailable = status === 'available';

    return (

      <li className='menu-burger'>
        <div className="image-container">
          <img
            src={image}
            alt={name}
          />
        </div>

        <div className="burger-details">
          <h3 className="burger-name">
            {name}
            <span className="price">{price} ₽</span>
          </h3>
          <p>{desc}</p>
          <button
            className='buttonOrder'
            disabled={!isAvailable}
            onClick={() => addToOrder(index)}
          >
            {isAvailable ? 'Заказать' : 'Отсутствует'}
          </button>
        </div>
      </li>
    )
  }
}

export default Burger;
