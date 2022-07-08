
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { IMoviesDTO } from '../../types/movies';

import { HomeView } from './view';

export function Home() {
  const [movies, setMovies] = useState<IMoviesDTO[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=44aa380a1c46378725fcf04e2aabae3a&language=en-US&page=1");
      const responseJson = await response.json();

      setMovies(responseJson.results)      
    } catch (error) {
      console.warn(error)
    }
}

  const onPressMovie = (titulo: string) => {
    Alert.alert(`O nome desse é: ${titulo}`)
  }

useEffect(() => {
  getMovies();
} , []);


  return <HomeView movies={movies} onPressMovie={onPressMovie} />;
}
