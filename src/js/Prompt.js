import React from 'react'

class Prompt extends React.Component{
  handleClick(e) {
    this.props.changeQuote();
  }

  render() {
    return (
      <div id="prompt">
        <button id="quoteButton" onClick={this.handleClick.bind(this)}>Give me a new quote!</button>
      </div>
    );
  }
}

export default Prompt