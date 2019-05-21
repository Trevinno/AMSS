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
      movies: getMovies()
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

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  adjustMovies = () => {
    const { movies, pageSize, currentPage } = this.state;
    const { genreId } = this.props;
    let rawMovies = [...movies];
    let filteredMovies =
      genreId === 0
        ? rawMovies
        : rawMovies.filter(movie => movie.genre._id === genreId);

    let sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    let moviesPage = [];
    moviesPage = sortedMovies.slice(
      (currentPage - 1) * pageSize,
      pageSize * currentPage
    );

    return { moviesPage: moviesPage, moviesCount: sortedMovies.length };
  };

  render() {
    const { sortColumn, pageSize, currentPage } = this.state;
    const { moviesPage, moviesCount } = this.adjustMovies();

    return moviesCount === 0 ? (
      <h2>No Movies Found!</h2>
    ) : (
      <div>
        <h2>Showing {moviesCount} movies in the database</h2>

        <MoviesTable
          moviesPage={moviesPage}
          sortColumn={sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleSort}
        />

        <Pagination
          pageSize={pageSize}
          currentPage={currentPage}
          itemsCount={moviesCount}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
