import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {

  render() {
    const { changePage } = this.props

    return (
      <Menu fluid widths={3}>
        <Menu.Item
          name='Home'
          onClick={() => changePage("homePage")}
        />
        <Menu.Item
          name='Discover'
          onClick={() => changePage("getEventsPage")} 
        />
        <Menu.Item
          name='See all'
          onClick={() => changePage("allEvents")}
        />
      </Menu>
    )
  }
}

//https://react.semantic-ui.com/collections/menu/#variations-evenly-divided