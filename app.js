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

var App = React.createClass({
  getInitialState: function(){
    return {
      quote: ""
    };
  },
  changeQuote: function(){
    var number = Math.floor(Math.random()*quotes.length);
    this.setState({
      quote: quotes[number]
    });
  },
  render: function(){
    return (
      <div>
        <div class="col-md-6 col-md-offset-3 col-xs-8 col-xs-offset-2 well">
          <Title />
          <Prompt changeQuote={this.changeQuote}/>
          <QuoteSection quote={this.state.quote}/>
          <Tweet quote={this.state.quote}/>
        </div>
      </div>
    );
  }
});

var Title = React.createClass({
  render: function(){
    return (
      <div id="titleDiv">
        <h1 id="title">Quotation Chaos</h1>
      </div>
    );
  }
});

var Prompt = React.createClass({
  handleClick: function(e){
    this.props.changeQuote();
  },
  render: function(){
    return (
      <div id="prompt">
        <button id="quoteButton" onClick={this.handleClick}>Give me a new quote!</button>
      </div>
    );
  }
});

var QuoteSection = React.createClass({
  render: function(){
    return (
      <div id="quoteBox">
        <p id="quoteText">{this.props.quote}</p>
      </div>
    );
  }
});

var Tweet = React.createClass({
  getInitialState: function(){
    return {
      url: "https://twitter.com/intent/tweet?text=hello"
    }
  },
  tweetQuote: function(){
    
    this.setState({
      url:"https://twitter.com/intent/tweet?text="+ this.props.quote
    });
  },
  render: function(){
    return (
      <div id="tweet">
        <a href={this.state.url} id ="tweetButton"
  target="_blank" onClick={this.tweetQuote}>Tweet this quote</a>
      </div> 
    );
  }
});

ReactDOM.render(<App />, document.getElementById("app"));