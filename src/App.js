import './App.css';
import WordCard from './WordCard';
import _ from 'lodash'


function App() {
  const word = ["LEAN","SIT","HIT","CRAWL","CLIMB","CARRY","FLY","SWIM"];
  const randomWord = _.sample(word)
  return (
    <div>
      {
        <WordCard value={randomWord}/>
        
      }
    </div>
 );
}

export default App;
