import React, { Component } from 'react'
import './rotatingText.css'

class rotatingText extends Component {
  constructor(props) {
    super(props)
    const { textArray } = this.props
    const intiialState = {
      index: 0,
      text: textArray[0]
    }
    this.state = intiialState
    // setInterval(() => {
    //   this.rotateText()
    // }, 4000);
  }

  rotateText() {
    const nextIndex = this.state.index + 1
    const nextText = this.props.textArray[this.state.index + 1]
    this.setState({
      text: ''
    }, () => {
      setTimeout(() => {
        this.setState({
          index: nextIndex,
          text: nextText
        })
      }, 1000);
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className="banyan-rotatingText-container">
        {text ?
          (<h2 className={`banyan-rotatingText-test`}>
            {text}
          </h2>) : null
        }
      </div>
    )
  }
}

export default rotatingText
