import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SavedList from './Movies/SavedList';

import {Route} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);

        })
        .catch(err => {
          console.error('Server Error', err);
        });
    }
    getMovies(); //if I'm readin correctly, 'invoke this function immediately upon useEffect running' (which will be when the component mounts; empty array below)
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

    <Route exact path='/'>
      <MovieList movies={movieList} />
    </Route>

    <Route path='/movies/:id'>
      <Movie />
    </Route>
      
    </div>
  );
}
