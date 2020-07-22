import React from "react";
import Proptypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 180)}...</p>
      </div>
    </div>
  );
}

Movie.proptype = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
  genres: Proptypes.objectOf(Proptypes.string).isRequired,
};

export default Movie;
