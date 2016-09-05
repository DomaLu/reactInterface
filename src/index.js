import 'babel-polyfill';

import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';


class MainInterface extends Component {
  constructor(props) {
    super(props)
      this.state = {
        title : 'Appointments',
        show : true
      }
  }

  render() {
    let showTitle;

    if(this.state.show) {
      showTitle ='New'
    }

    let displayList = {
      display: this.state.show ? 'block' : 'none',
      color: 'red'
    }

    return (
      <div className='interface'>
        {/* <h1>{ this.state.show ? 'Pet' : null }&nbsp;{this.state.title}</h1> */}
        <h1>{ showTitle }&nbsp;{this.state.title}</h1>
        <ul style={displayList}>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
  )}
}



ReactDOM.render(
  <MainInterface />, document.getElementById('petAppointments')
)
