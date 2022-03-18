import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import Burger from './Burger';
import sampleBurgers from '../sample-burgers';
import base from '../base';

class App extends React.Component {
  static propTypes = {
    match: PropTypes.object
  }

  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restourantId);

    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) })
    }

    this.ref = base.syncState(
      `${params.restourantId}/burgers`,
      {
        context: this,
        state: 'burgers'
      }
    );
  }
  componentDidUpdate() {
    const { params } = this.props.match;

    localStorage.setItem(
      params.restourantId,
      JSON.stringify(this.state.order)
    );
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addBurger = burger => {
    // 1. Делаем копию объекта state
    const burgers = { ...this.state.burgers };
    // 2. Добавляем новый бургер в переменную burgers
    burgers[`burger${Date.now()}`] = burger;
    // 3. Записываем наш новый объект burgers в state
    this.setState({ burgers });
  }

  updateBurger = (key, updatedBurger) => {
    const burgers = { ...this.state.burgers };
    burgers[key] = updatedBurger;
    this.setState({ burgers });
  }

  deleteBurger = key => {
    const burgers = { ...this.state.burgers };
    burgers[key] = null;
    this.setState({ burgers });
  }

  loadSampleBurgers = () => {
    this.setState({ burgers: sampleBurgers })
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }

  deleteFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
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
                    addToOrder={this.addToOrder}
                    details={this.state.burgers[key]}
                  />
                )
              })
            }
          </ul>
        </div>
        <Order
          burgers={this.state.burgers}
          order={this.state.order}
          deleteFromOrder={this.deleteFromOrder}
        />
        <MenuAdmin
          addBurger={this.addBurger}
          loadSampleBurgers={this.loadSampleBurgers}
          burgers={this.state.burgers}
          updateBurger={this.updateBurger}
          deleteBurger={this.deleteBurger}
        />
      </div>
    )
  }
}

export default App;
