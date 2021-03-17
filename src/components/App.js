import React from "react"
import SearchBar from "./SearchBar"

const App = () => {
  const containerWidth = {
    marginTop: "20px"
  }

  return (
    <div className="ui container" style={containerWidth}>
      <SearchBar />
    </div>
  )
}

export default App
