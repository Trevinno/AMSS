import React from "react";
import Like from "./common/Like";

export default function MoviesTable({ moviesPage, onLike, onDelete, onSort }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("title")} className="col">
            Title
          </th>
          <th onClick={() => onSort("genre.name")} className="col">
            Genre
          </th>
          <th onClick={() => onSort("stock")} className="col">
            Stock
          </th>
          <th onClick={() => onSort("rate")} className="col">
            Rate
          </th>
          <th className="col">Like</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {moviesPage.map(movie => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onToggle={() => onLike(movie._id)} />
            </td>
            <td>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(movie._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
