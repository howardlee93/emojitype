import React, { useEffect, useState } from 'react';
import './App.css';
import emojis from './const/emoji.json';
import EmojiCard from './components/EmojiCard';
import SearchBar from './components/SearchBar';


function App() {

  const [searchTerm, setSearchTerm] = useState<string>(''); // title or keywords
  const [emojisResult, setEmojisResult] = useState<Array<EmojiResults>>([]);

  useEffect(()=>{
    setEmojisResult(emojis);
    console.log(emojis.length)
  },[]);

  const handleOnChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value, e.target.value.length);
    setSearchTerm(e.target.value.trim());
  }

  return (
    <div className="App">
      <header>
       <h3>emoji search</h3>
      </header>

      <SearchBar handleOnChange={handleOnChange} />
      <div className='emoji-results'>
      {emojisResult
      .filter(elem => {
        if (searchTerm.length === 0){
          return elem;
        }else if( elem.keywords.includes(searchTerm) || 
          elem.title.includes(searchTerm)){
            return elem;
          }
        return false;
        }
      )
      .slice(0,9)
      .map((emoji,i) =>{
        return(
          <EmojiCard key={i} emoji={emoji}/>
        )
      })}
      </div>
    </div>
  );
}

export default App;
