import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';

class App extends React.Component {
  state = {
    burgers: {},
    order: {},
  };

  addBurger = burger => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавляем новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записываем наш новый объект burgers в state
    this.setState({ burgers });
  }

  addToOrder = key => {
    // 1. Делаем копию объекта state
    const order = { ...this.state.order };
    // 2. Добавляем ключ к заказу со значением 1, либо обновить текущее значение
    order[key] = order[key] + 1 || 1;
    // 3. Записываем наш новый объект order в state
    this.setState({ order });
  }

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers })
  }

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title='Hot Burgers' />
          <ul className='burgers'>
            {
              Object.keys(this.state.burgers).map(key => {
                return (
                  <Burger
                    key={key}
                    index={key}
                    details={this.state.burgers[key]}
                    addToOrder={this.addToOrder}
                  />
                )
              })
            }
          </ul>
        </div>
        <Order />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
        />
      </div>
    )
  }
}

export default App;
