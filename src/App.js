import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Genres from "./components/Genres";

class App extends Component {
  state = {
    genresToShow: 0
  };

  handleFilter = id => {
    this.setState({ genresToShow: id }, () =>
      console.log("handleFilter", this.state)
    );
  };
  render() {
    return (
      <main role="main" className="container">
        <div className="row">
          <div className="col-2">
            <Genres
              onSelectGenre={this.handleFilter}
              selectedGenreId={this.state.genresToShow}
            />
          </div>
          <div className="col-10">
            <Movies genreId={this.state.genresToShow} />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
