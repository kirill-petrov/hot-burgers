import React, { useState } from 'react';
import PropTypes from 'prop-types';
import restourants from '../sample-restaurants';

const Landing = ({ history }) => {
  const [display, toggleDisplay] = useState(false);
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const displayList = () => {
    toggleDisplay(!display);
  };

  const getTitle = (restourant) => {
    const { title, url } = restourant;
    setTitle(title);
    setUrl(url);
    toggleDisplay(false);
  }

  const goRestourant = () => {
    history.push(`/restourant/${url}`);
  }

  return (
    <div className='restaurant_select'>
      <div className='restaurant_select_top'>
        <div
          onClick={displayList}
          className='restaurant_select_top-header font-effect-outline'
        >
          {
            title
              ? title
              : 'Выбери ресторан'
          }
        </div>

        <div className='arrow_picker'>
          <div className='arrow_picker-up'></div>
          <div className='arrow_picker-down'></div>
        </div>
      </div>

      {
        display
          ? (
            <div className='restaurant_select_bottom'>
              <ul>
                {
                  restourants.map((restourant) => {
                    return (
                      <li
                        key={restourant.id}
                        onClick={() => getTitle(restourant)}
                      >
                        {restourant.title}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
          : null
      }

      {
        title && !display
          ? <button onClick={() => goRestourant()}>Перейти в ресторан</button>
          : null
      }
    </div>
  );

}

Landing.propTypes = {
  history: PropTypes.object
}

export default Landing;
