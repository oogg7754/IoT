import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// class Movie extends Component {
// Render: componentWillMount() -> render() -> componentDidMount()
// Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

//   static propTypes = {
//     // 부모 컴포넌트에서 받는 type 체크
//     title: PropTypes.string.isRequired, // 필수로 받아야하는 정보
//     poster: PropTypes.string.isRequired,
//   };
//   render() {
//     return (
//       <div>
//         <MoviePoster poster={this.props.poster} />
//         <h1>{this.props.title}</h1>
//       </div>
//     );
//   }
// }

function Movie({ title, poster, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Columns">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Columns">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie__Synopsis">{synopsis}</p>
      </div>
    </div>
  );
}

// class MoviePoster extends Component {
//   static propTypes = {
//     poster: PropTypes.string.isRequired,
//   };
//   render() {
//     return <img src={this.props.poster} alt="Avengers" />;
//   }
// }

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenre({ genre }) {
  return <span className="Movie_Genre">{genre} </span>;
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default Movie; // Movie를 App.js로 내보냄
