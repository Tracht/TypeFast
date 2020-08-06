import React, { useState } from 'react';
import "./style.css"

const App = () => {

  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null }

  const LEVELS = [
    40, 60, 80, 100
  ]
  const SNIPPETS = [ 
    'I walked today and saw a flock of birds.',
    'At the shop, the kitten asked for £2.50.',
    'The lady in red was playing a xylophone.',
    'Burty Buttons bought crumpets on Sunday.',
    "She thought there'd be sufficient time if she hid her watch.",
    "Shakespeare is a famous 17th-century mechanic who ate much.",
    "The shark-infested South channel was the only way in or out.",
    "Each person who knows you has a different perception of you.",
    "Grape jelly was leaking from the hole in the roof and the gardener paid no mind.",
    "He embraced his new life as an eggplant, waiting for the sun of flowers to show.",
    "He was an introvert who loved blueberries and the trees loved him back as well.",
    "She was always too busy talking about what she would like to do to do any of it.",
    'Grape jelly was leaking out the hole in the roof and the gardener paid no mind.',
    "He embraced his new life as an eggplant, waiting for the sun of flowers to show.",
    "She was an introvert who loved blueberries and the trees loved her back as well.",
    "She was always too busy talking about what she would like to do to do any of it.",
    "They say that racoons are a man's best friend, but this cat was setting out to sabotage that theory.",
    "It was the best sandcastle he had ever seen, and she traveled the whole world far & wide to know it.",
    "She used her own hair in the stew to give it more flavour. The customers, dogs, and cat didn't mind!",
    "When motorists sped in and out of traffic, all she could think of was those in need of a transplant."
  ]

  var chars;

  const [level, setLevel] = useState('');
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const updateUserText = event => {
    setUserText(event.target.value);
    console.log('current userText', userText);
    if (event.target.value === snippet) {
      setGameState({
        gameState,
        victory: true, 
        endTime: ( new Date().getTime() - gameState.startTime ) / 1000
      });
    }  
  }

  const chooseLevel = () => (chars, index, level) => {
    setLevel(level)
    console.log(1);
    console.log("level =", level) ;
    console.log("chars = ", chars);
    console.log("index = ", index);
    console.log(2);
  }

  const chooseSnippet = () => {  
    // setSnippet( snippet );
    // setGameState({ gameState, startTime: new Date().getTime() });
    // console.log('setSnippet', snippet);
  }

  let gameTitle = 
    <h2> 🏎️ ⌨️ 🏎️ Type Race 
      <span role="img" aria-label="racecar and keyboard emoji"> 🏎️ ⌨️ 🏎️ </span>
    </h2>
     
    
  return (
    <div className="App">

    {/* --------------- SECTION 1 ------------- */}
      {gameTitle}

        <h4> Choose a level <br></br> 

          { LEVELS.map((chars, index) => ( 
            <button onClick={ chooseLevel(chars, index) } class="button" key={index} value={chars} > 
              {index + 1} 
            </button>    
            ))
          }

        </h4> 

      <h3> { level? `Click one of the sentences to start!` : null } </h3>

      { SNIPPETS.map( (SNIPPET, index) => {
        if ( SNIPPET.length === {level} ) { 
            return <p> <button onClick={chooseSnippet(index)} key={index} value={snippet}> {SNIPPET.substring(0,20)} </button> </p>  
          } 
        }
      )}

    {/* ------- SECTION 2 ------- */}  
        <h3> { snippet? `🏁 Type this snippet now! 🏁 Go! 🏁 ` : null } </h3> 
            { snippet }
        
        <h4> { gameState.victory? `Done! 🏆 Time: ${gameState.endTime} seconds ` : null } </h4>
          <hr />
        
        <p> Type here! <br></br>
          <input value={userText} onChange={updateUserText} /> 
        </p>
  

   </div>
   
      ); 
}; 

export default App;
