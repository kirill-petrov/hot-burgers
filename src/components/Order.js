import React from 'react';
import Shipment from './Shipment';

class Order extends React.Component {
  renderOrder = key => {
    const burger = this.props.burgers[key];
    const count = this.props.order[key];
    const isAvailable = burger && burger.status === 'available';

    if (!burger) return null;

    if (!isAvailable) {
      return (
        <li key={key} className='unavailable'>
          Извините, {burger ? burger.name : `бургер`} не доступен
        </li>
      )
    }

    return (
      <li key={key}>
        <span>{count}</span>
        шт. {burger.name}
        <span> {count * burger.price} ₽</span>
        <button
          onClick={() => this.props.deleteFromOrder(key)}
          className='cancelItem'
        >
          &times;
        </button>
      </li>
    )
  }

  render() {
    const orderId = Object.keys(this.props.order);
    const total = orderId.reduce((prevTotal, key) => {
      const burger = this.props.burgers[key];
      const count = this.props.order[key]
      const isAvailable = burger && burger.status === 'available';

      if (isAvailable) {
        return prevTotal + burger.price * count;
      }

      return prevTotal;
    }, 0);


    return (
      <div className="order-wrap">
        <h2>Ваш заказ</h2>
        <ul className="order">
          {
            orderId.map(this.renderOrder)
          }
        </ul>

        {
          total > 0
            ? <Shipment total={total} />
            : <div className="nothingSelected">
              Выберите бургер и добавьте к заказу
            </div>
        }

      </div >
    )
  }
}

export default Order;
