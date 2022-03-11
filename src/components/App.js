import React from 'react';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
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
    // 3. Записываем на новый объект burgers в state
    this.setState({ burgers });
  }

  loadSampleBurgers = () => {
    console.log(sampleBurgers);
    this.setState({ burgers: sampleBurgers })
  }

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title='Hot Burgers' />
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
