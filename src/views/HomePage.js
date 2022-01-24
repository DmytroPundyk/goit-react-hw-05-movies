import { useState, useEffect } from 'react';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import { getDayTrandingMovies } from '../services/movieAPI.js';
import MovieList from '../components/movieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
      getDayTrandingMovies()
     .then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <Container>
      <PageTitle title={'Trending today'} />
      {movies === null ? <p>...Loading</p> : <MovieList movies={movies}/>}
    </Container>
  );
};

export default HomePage;
