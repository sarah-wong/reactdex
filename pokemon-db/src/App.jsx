import { useState } from 'react'
import './App.css'
import SearchForm from './components/SearchForm'
import Pokedex from './components/Pokedex'

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <SearchForm query={query} setQuery={setQuery}/>
      <Pokedex query={query}/>
    </>
  )
}

export default App
