import React from 'react'

const QuoteSection = ({quote}) =>{
  return (
    <div id="quoteBox">
      <p id="quoteText">{quote}</p>
    </div>
  );
};

export default QuoteSection