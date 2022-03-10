import React from 'react';
import restourants from '../sample-restaurants';

class Landing extends React.Component {
  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>
          <div className='restaurant_select_top-header'>Выбери ресторан</div>

          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>

        <div className='restaurant_select_bottom'>
          <ul>
            {restourants.map((restourant) => {
              return <li key={restourant.id}>{restourant.title}</li>;
            })}
          </ul>
        </div>

        <button>Перейти в ресторан</button>
      </div>
    );
  }
}

export default Landing;
