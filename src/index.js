import 'babel-polyfill'
import React, { Component }from 'react'
import ReactDOM from 'react-dom'
import AptList from './components/AptList'
import AddAppointment from './components/AddAppointment'
import SearchAppointment from './components/SearchAppointment'
import _ from 'lodash'
import './css/styles.scss'


class MainInterface extends Component {
  constructor(props) {
    super(props)
      this.state = {
        aptBodyVisible : false,
        orderBy : 'petName',
        orderDir : 'asc',
        myAppointments: []
      }
      this.deleteMessage = this.deleteMessage.bind(this)
      this.toggleAddDisplay = this.toggleAddDisplay.bind(this)
      this.addItem = this.addItem.bind(this)
      this.reOrder = this.reOrder.bind(this)
  }

  deleteMessage(item) {
    let allApts = this.state.myAppointments;
    let newApts = _.without(allApts, item)
    this.setState({
      myAppointments : newApts
    })
  }

  toggleAddDisplay() {
    let tempVisibility = !this.state.aptBodyVisible
    this.setState({aptBodyVisible : tempVisibility})
  }

  addItem(tempItem) {
    let tempApts = this.state.myAppointments
    this.setState({ myAppointments : [...tempApts, tempItem] })
  }

  reOrder(orderBy, orderDir) {
    this.setState({
      orderBy : orderBy,
      orderDir : orderDir
    })
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
    let orderBy = this.state.orderBy
    let orderDir = this.state.orderDir

    filteredApts = _.orderBy(filteredApts, (item) =>  {
      // console.log(this)
      // let specItem = item[orderBy].toLowerCase()
      // console.log(specItem)
      // return specItem
      return item[orderBy].toLowerCase()
    }, orderDir)

    filteredApts = filteredApts.map( (item, index) => {
      return (
        <AptList key={index} singleItem={item} whichItem={item} onDelete={this.deleteMessage}/>
      )
    })

    return (
      <div className='interface'>
        <AddAppointment
          bodyVisible={this.state.aptBodyVisible}
          handleToggle={ this.toggleAddDisplay }
          addApt={this.addItem}/>
        <SearchAppointment
          orderBy = {this.state.orderBy}
          orderDir = {this.state.orderDir}
          onReOrder = {this.reOrder}
        />
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
