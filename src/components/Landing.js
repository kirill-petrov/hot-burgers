import React from 'react';
import restourants from '../sample-restaurants';

class Landing extends React.Component {
  state = { display: false, title: '', url: '' };

  displayList = () => {
    const { display } = this.state;
    this.setState({ display: !display });
  };

  getTitle = (restourant) => {
    const { title, url } = restourant;
    this.setState({ title, url, display: false });
  }

  goRestourant = () => {
    console.log('go');
  }

  render() {
    return (
      <div className='restaurant_select'>
        <div className='restaurant_select_top'>
          <div
            onClick={this.displayList}
            className='restaurant_select_top-header font-effect-outline'
          >
            {
              this.state.title
                ? this.state.title
                : 'Выбери ресторан'
            }
          </div>

          <div className='arrow_picker'>
            <div className='arrow_picker-up'></div>
            <div className='arrow_picker-down'></div>
          </div>
        </div>

        {
          this.state.display
            ? (
              <div className='restaurant_select_bottom'>
                <ul>
                  {
                    restourants.map((restourant) => {
                      return <li
                        key={restourant.id}
                        onClick={() => this.getTitle(restourant)}
                      >
                        {restourant.title}
                      </li>;
                    })
                  }
                </ul>
              </div>
            )
            : null
        }

        {
          this.state.title && !this.state.display
            ? <button
                onClick={() => this.goRestourant()}
              >
                Перейти в ресторан
              </button>
            : null
        }
      </div>
    );
  }
}

export default Landing;
