import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    isLoading: true, // mount 될 때 Loading은 자명하므로 true
    movies: []
  };

  getMovies = async () => {
    const url = "https://yts-proxy.nomadcoders1.now.sh/list_movies.json";
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(url);
    // { movies } 는 { movies: movies } 의 축약형 
    // -> state의 movies와 axios에서 가져온 movies
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // ES6 문법
    const movieList = movies.map((movie) =>{
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year} 
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}/>
      );
    });
    
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movieList}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
