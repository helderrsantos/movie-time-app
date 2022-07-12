import React, { useEffect, useState } from 'react';
import { IMoviesDTO } from '../../types/movies';
import { Alert } from 'react-native';
import { api } from '../../api';

import { HomeView } from './view';

export function Home() {
  const [movies, setMovies] = useState<IMoviesDTO[]>([]);

  const getMovies = async (category:string) => {
    try {
      const response = await api.get(`/movie/${category}?api_key=44aa380a1c46378725fcf04e2aabae3a&language=en-US&page=1`);
      const responseJson = await response.data;

      setMovies(responseJson.results)  

    } catch (error) {
      console.warn(error)
    }
}

  const onPressMovie = (titulo: string) => {
    Alert.alert(`O nome desse é: ${titulo}`)
  }

useEffect(() => {
  getMovies('now_playing');
} , []);


  return <HomeView movies={movies} onPressMovie={onPressMovie} />;
}
