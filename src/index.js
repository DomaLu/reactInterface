import 'babel-polyfill'
import React, { Component }from 'react'
import ReactDOM from 'react-dom'
import AptList from './components/AptList'
import './css/styles.scss'


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
        <AptList key={index} singleItem={item} />
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
