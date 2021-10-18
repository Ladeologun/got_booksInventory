import './App.css';
import { useState } from "react"
import SearchCard from './components/SearchCard'
import Book from "./components/Books"
import Header from "./components/Header"


function App() {
  const [searchValue, setSearchValue] = useState("")
  const [searchTag, setSearchTag] = useState("")

  const handleSubmit = (input:string, tag:string):void => {
    setSearchValue(input)
    setSearchTag(tag)
  }

  return (
    <div className="App">
      <Header />
      <SearchCard handleSubmit={handleSubmit} />
      <Book searchValue={searchValue} searchTag={searchTag}/>
    </div>
  );
}

export default App;

