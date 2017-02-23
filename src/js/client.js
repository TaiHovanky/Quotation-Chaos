import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'
import Prompt from './Prompt'
import QuoteSection from './QuoteSection'
import Tweet from './Tweet'

var quotes = [
  "Fortune favors the bold. - British SAS",
  "The only easy day was yesterday. - US Navy SEALs",
  "With great power comes great responsibility. - Uncle Ben",
  "This is Sparta! - King Leonidas",
  "First you plant the seed. Then you fuck the plant. - Seth Rogen",
  "A baby's gotta do what a baby's gotta do. - Tommy Pickles", 
  "What is this - a school for ants?! - Zoolander", 
  "Hodor. - Hodor", 
  "YEEEAAAHHH. - Lil Jon", 
  "We have nothing to fear, but fear itself. - Franklin D. Roosevelt",
  "The very basic core of a man's living spirit is his passion for adventure. - Christopher McCandless",
  "Not all those who wander are lost. - JRR Tolkien",
  "Believe it! - Naruto",
  "I'M READY!! - Spongebob"
];

export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quote: ""
    }
  }

  changeQuote() {
    var number = Math.floor(Math.random()*quotes.length);
    this.setState({
      quote: quotes[number]
    });
  }

  render() {
    return (
      <div>
        <div class="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2 well">
          <Title />
          <Prompt changeQuote={this.changeQuote.bind(this)}/>
          <QuoteSection quote={this.state.quote}/>
          <Tweet quote={this.state.quote}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));