import React from 'react'

export default class Tweet extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      url: "https://twitter.com/intent/tweet?text=hello"
    }
  }

  tweetQuote() {
    this.setState({
      url:"https://twitter.com/intent/tweet?text="+ this.props.quote
    });
  }
  render() {
    return (
      <div id="tweet">
        <a href={this.state.url} id ="tweetButton"
        target="_blank" onClick={this.tweetQuote.bind(this)}>Tweet this quote</a>
      </div> 
    );
  }
};