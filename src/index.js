import 'babel-polyfill';

import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';


class Init extends Component {
  render() {
    return (
      <div className='interface'>
        <h1>Pet Appointments</h1>
        <ul>
          <li>Buffy 3:30 PM</li>
          <li>Spot 8:30 PM</li>
          <li>Goldie 3:50 PM</li>
        </ul>
      </div>
  )}
}



ReactDOM.render(
  <Init />, document.getElementById('petAppointments')
)
