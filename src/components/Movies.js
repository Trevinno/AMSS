import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: getMovies(),
      pageSize: 4,
      currentPage: 1
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      movies:
        nextProps.genreId === 0
          ? getMovies()
          : getMovies().filter(movie => movie.genre._id === nextProps.genreId)
    });
  }

  handleDelete = id => {
    const { movies } = this.state;
    const updatedMovies = movies.filter(movie => movie._id !== id);
    this.setState({ movies: updatedMovies });
  };

  handleLike = id => {
    const movies = [...this.state.movies];
    movies.map(movie => {
      if (movie._id === id) movie.liked = !movie.liked;
      return movie;
    });

    this.setState({ movies });
  };

  handlePageChange = pageNum => {
    this.setState({ currentPage: pageNum });
  };

  render() {
    const { movies, pageSize, currentPage } = this.state;
    let moviesPage = [];
    moviesPage = movies.slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage
    );
    return movies.length === 0 ? (
      <h2>No Movies Found!</h2>
    ) : (
      <div>
        <h2>Showing {movies.length} movies in the database</h2>

        <MoviesTable
          moviesPage={moviesPage}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
        />

        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          itemsCount={movies.length}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
