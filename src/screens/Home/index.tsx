import React, { useEffect, useState } from 'react';
import { IMoviesDTO } from '../../types/movies';

import { getMoviesByCategory } from '../../services/movies';
import { HomeView } from './view';

export interface IMovies { 
  [key: string] : IMoviesDTO[]
}

export function Home() {
  const [movies, setMovies] = useState<IMovies>();
  const [loading, setLoading] = useState(true);
  const categories = [ 'now_playing', 'popular', 'top_rated', 'upcoming'  ];


  const getMovies = async () => {
    try {
      categories.forEach( async (category) => {
        const result = await getMoviesByCategory(category);
        const dataByCategory = {
          [category]: result
        }

        setMovies((prevState) => ({...prevState, ...dataByCategory}))

      });
    } catch (error) {
      // TODO: Tratar erros de requisicao API
      console.warn(error)
    } finally {
      setLoading(false);
    }
}

useEffect(() => {
  getMovies()
} , []);

  return <HomeView movies={movies} loading={loading} onPressMovie={() => {}} />;
}
