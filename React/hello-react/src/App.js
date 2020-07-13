import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  state = {};
  componentDidMount() {
    this._makeMovies();
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _makeMovies = async () => {
    // 비동기 함수(asynchronized function) * async를 사용해야 안에서 await을 사용할 수 있음
    const movies = await this._callApi(); // await: callApi 작업이 끝날때까지 다음 라인 실행하지 않음
    this.setState({
      movies, // movies: movies
    });
  };

  _callApi = () => {
    return fetch("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then((response) => response.json())
      .then((json) => json.data.movies)
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App; // App을 index.js로 내보내기
