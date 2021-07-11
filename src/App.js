import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'


function App() {
  const word = ["LEAN","SIT","HIT","CRAWL","CLIMB","CARRY","FLY","SWIM"];
  const randomWord = _.sample(word);

  const newGame = () => {
    window.location.reload()
  }
  
  return (
    <div className="head">
      <header>
        <h1> English word activity game </h1>
      </header>
        <div className="maingame" >
          <WordCard value = {randomWord}/>
        </div>
        <button className="newgame" onClick={newGame}>
          Restart
        </button>
        
      
    </div>
 );
}

export default App;
