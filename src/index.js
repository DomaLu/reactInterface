import 'babel-polyfill';

import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';


class Init extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div>
      <h1>123</h1>
    </div>
  )}
}



ReactDOM.render(
  <Init />, document.getElementById('root')
)
