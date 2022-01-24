import {
  Contain
} from './App.styled';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Appbar from './components/appbar/Appbar';
import Cast from './components/cast/Cast';
import Reviews from './components/reviews/Reviews';

const HomePage = lazy(() =>
  import('./views/HomePage' ),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage'),
);

const App = () => {
  return (
    <Contain>
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
          <Route path="/" element={<Appbar />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieID" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Contain>
  );
};

export default App;
