import React from "react"
import axios from "axios"

import SearchBar from "./SearchBar"

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID RGmyvMk5480G69BQNpR26l55sKhNI5LP7krMwcBrhJE"
      }
    })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}

export default App
