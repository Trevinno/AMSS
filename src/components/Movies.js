import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
import _ from "lodash";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: { path: "title", order: "asc" }
    };
  }

  componentDidMount() {
    this.setState({
      movies: this.adjustedMovies(0)
    });
  }

  componentWillReceiveProps(nextProps) {
    // this.setState({
    //   movies:
    //     nextProps.genreId === 0
    //       ? getMovies()
    //       : getMovies().filter(movie => movie.genre._id === nextProps.genreId)
    // });

    this.setState({
      movies: this.adjustedMovies(nextProps.genreId)
    });
  }

  adjustedMovies(genreId) {
    let filteredMovies =
      genreId === 0
        ? getMovies()
        : getMovies().filter(movie => movie.genre._id === genreId);

    let sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );
    console.log(this.state.sortColumn.path);
    return sortedMovies;
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

  handleSort = path => {
    this.setState({ sortColumn: { path: path, order: "asc" } }, () =>
      console.log(this.state.sortColumn)
    );
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
          onSort={this.handleSort}
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
