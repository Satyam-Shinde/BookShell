import React, { useState } from 'react'
import Search from "./Components/Search"
import Books from "./Components/Books"

const App = () => {
  const [query, setQuery] = useState("all");
  return (
    <>
      <div className="container mt-3">
        <Search onSearch={setQuery}/>

        <Books query={query}/>
      </div>
    </>
  )
}

export default App