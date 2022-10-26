import React, { useEffect, useState } from 'react';
import './App.css';
import emojis from './const/emoji.json';
import EmojiCard from './components/EmojiCard';
import SearchBar from './components/SearchBar';


function App() {

  const [searchTerm, setSearchTerm] = useState<string>(''); // title or keywords
  const [emojisResult, setEmojisResult] = useState<Array<EmojiResults>>(emojis);

  // useEffect(()=>{
  //   setEmojisResult(emojis);
  // },[]);

  const handleOnChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    let emojiList = emojis.slice();
    emojiList = emojiList.filter( elem => elem.keywords.includes(searchTerm) || 
    elem.title.includes(searchTerm));
    console.log(emojiList);
    setEmojisResult(emojiList);
  }

  return (
    <div className="App">
      <header>
       <h3>emoji search</h3>
      </header>

      <SearchBar handleOnChange={handleOnChange} />
      {emojisResult.slice(0,6).map((emoji,i) =>{
        return(
          <EmojiCard key={i} emoji={emoji}/>
        )
      })}
    </div>
  );
}

export default App;
