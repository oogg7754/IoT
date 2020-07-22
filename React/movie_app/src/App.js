import React, { Component } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
class App extends Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    ); // API 가져온 이후 아래 함수 실행
    this.setState({ movies, isLoading: false }); // {movies: movies}
  };

  componentDidMount() {
    // 컴포넌트가 생성 되면 실행
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="Container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
