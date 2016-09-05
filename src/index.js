import 'babel-polyfill';

import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import './css/styles.scss';


class MainInterface extends Component {
  constructor(props) {
    super(props)
      this.state = {
        myAppointments: []
      }
  }

  componentDidMount() {
    this.serverRequest = $.get('./data.json', (result) => {
      let tempApts =result
      this.setState({
        myAppointments : tempApts
      })
    })
  }

  render() {
    let filteredApts = this.state.myAppointments

    filteredApts = filteredApts.map( (item, index) => {
      return (
        <li className='pet-item media' key={index}>
          <div className='pet-info media-body'>
            <div className='pet-head'>
              <span className='pet-name'>{this.state.myAppointments[index].petName}</span>
              <span className='apt-date pull-right'>{this.state.myAppointments[index].aptDate}</span>
            </div>
            <div className='owner-name'><span className='label-item'>Owner:</span>
            {this.state.myAppointments[index].ownerName}
            </div>
            <div className='apt-notes'>{this.state.myAppointments[index].aptNotes}</div>
          </div>
        </li>
      )
    })

    return (
      <div className='interface'>
        <ul className='item-list media-list'>{filteredApts}</ul>
      </div>
  )}

  componentWillUnmount() {
    this.serverRequest.abort()
  }

}



ReactDOM.render(
  <MainInterface />, document.getElementById('petAppointments')
)
