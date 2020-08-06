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
    "Shakespeare is a famous 17th-century mechanic who ate a lot.",
    "The shark-infested South channel was the only way in or out.",
    "Each person who knows you has a different perception of you.",
    "Grape jelly was leaking from the hole in the roof and the gardener paid no mind.",
    "He embraced his new life as an eggplant, waiting for the sun of flowers to show.",
    "She was an introvert who loved blueberries and the trees loved her back as well.",
    "She was always too busy talking about what she would like to do to do any of it.",
    "They say that racoons are a man's best friend, but this cat was setting out to sabotage that theory.",
    "It was the best sandcastle he had ever seen, and she traveled the whole world far & wide to know it.",
    "She used her own hair in the stew to give it more flavour. The customers, dogs, and cat didn't mind!",
    "When motorists sped in and out of traffic, all she could think of was those in need of a transplant."
  ]

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

  const chooseSnippet = (snippet) => {  
    setSnippet( snippet );
    setGameState({ gameState, startTime: new Date().getTime() });
    console.log('setSnippet', snippet);
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

          { LEVELS.map((level, index) => ( 
            <button onClick={ () => setLevel(level) } className="button" key={index} value={level} > 
              {index + 1} 
            </button>    
            ))
          }

        </h4> 

      <h3> { level ? `Click one of the sentences to start!` : null } </h3>

      { SNIPPETS.map( (snippet, index) => {
        if ( snippet.length === level ) { 
            return <p> <button onClick={ () => chooseSnippet(snippet)} className="button" key={index} value={snippet}> {snippet.substring(0,20)} </button> </p>  
          } 
        }
      )}

    {/* ------- SECTION 2 ------- */}  
        <h4> { snippet ? `🏁 Type this snippet now! 🏁 Go! 🏁 ` : null } </h4> 
            
           <p id="snippet"> { snippet } </p> 
        
        <h4> { gameState.victory? `Done! 🏆 Time: ${gameState.endTime} seconds ` : null } </h4>
          <hr />
        
        <p> Type here! <br></br>
          <input value={userText} onChange={updateUserText} /> 
        </p>
  

   </div>
   
      ); 
}; 

export default App;
