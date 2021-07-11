import './App.css';
import WordCard from './WordCard';
import _, { random } from 'lodash'


function App() {
  /*const all = [word1,word2];*/
  const word1 = ["LEAN","SIT","HIT","CRAWL","CLIMB","CARRY","FLY","SWIM"];
  const word2 = ["PIZZA","SANDWICH","PASTA","CHIPS","CAKE","PIE"];
  const word3 = ["BASKET","BED","BELL","BOX","CAN","CLOCK"];
  /*const randomWord = _.sample(all);*/
  const randomWord1 = _.sample(word1);
  const randomWord2 = _.sample(word2);
  const randomWord3 = _.sample(word3);

  const newGame = () => {
    window.location.reload()
  }
  
  return (
    <div className="head">
      <header>
        <h1> English word game </h1>
      </header>
        <div className="maingame" >
        <h1> word Activity  </h1>
          <WordCard value = {randomWord1}/>
        <h1> word Food  </h1>
          <WordCard value = {randomWord2}/>
        <h1> word Things  </h1>
          <WordCard value = {randomWord3}/>
        
        </div>
        <button className="newgame" onClick={newGame}>
          Restart
        </button>
        
        
          
        
      
    </div>
 );
}

export default App;
