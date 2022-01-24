import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

import PageTitle from '../components/pageTitle/PageTitle';
import Container from '../components/container/Container';
import Button from '../components/button/Button';

import { getMovieById } from '../services/movieAPI.js';
import MovieInfoDetails from '../components/movieInfo/MovieInfoDetails';
import FullMovieInfo from '../components/FullMovieInfo/FullMovieInfo';

const MovieDetailsPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [fromLocation] = useState(() => {
    return location;
  });

  useEffect(() => {
      getMovieById(param.movieID)
      .then(resp => setMovie(resp))
      .catch(error => console.log(error));
  }, [param.movieID]);

  const returnBack = () => {
    if (fromLocation.state !== null) {
      const { pathname, search } = fromLocation.state.from;
      navigate(pathname + search ?? '/');
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <PageTitle title={'Movie Details'} />
      <Button onBackClick={returnBack} />
      {movie === null ? <p>...Loading</p> : <MovieInfoDetails movie={movie} />}
      <hr />
      <FullMovieInfo />
    </Container>
  );
};

export default MovieDetailsPage;
