import React, { Component } from 'react'
import { Button, Divider, Transition } from 'semantic-ui-react'


export default class Revealer extends Component {
  state = { visible: true }

  toggleVisibility = () =>
    this.setState((prevState) => ({ visible: !prevState.visible }))

  render() {
    const { visible } = this.state;
    const { textList, getTextMethod } = this.props; // Add a prop to accept the text

    return (
      <div>
        <Button
          content="Get something to do"
          onClick = {() => {this.toggleVisibility(); getTextMethod();}}
        />
        <Divider hidden />
        <div>
        {textList.map((text,index) => (
          <Transition
            key={index}
            visible={visible}
            animation='zoom'
            duration={500}
          >
            <h1>{text}</h1><br></br>
          </Transition>
        ))}
        </div>
      </div>
    )
  }
  }



//random resource
//https://react.semantic-ui.com/modules/transition/