import React from "react";
import { getGenres } from "../services/fakeGenreService";

export default function Genres({ onSelectGenre, selectedGenreId }) {
  return (
    <div>
      <ul className="list-group">
        <li
          key={0}
          className={
            selectedGenreId === 0
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          onClick={() => onSelectGenre(0)}
        >
          All Genres
        </li>

        {getGenres().map(genre => (
          <li
            key={genre._id}
            className={
              selectedGenreId === genre._id
                ? "list-group-item list-group-item-action active"
                : "list-group-item list-group-item-action"
            }
            onClick={() => onSelectGenre(genre._id)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
