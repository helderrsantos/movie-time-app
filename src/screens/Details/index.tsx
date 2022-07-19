import React, { useEffect, useState } from 'react';
import { IMoviesDTO } from '../../types/movies';

import { getMoviesByCategory } from '../../services/movies';
import { DetailsView } from './view';

export interface IMovies { 
  [key: string] : IMoviesDTO[]
}

export function Details() {
  const [movies, setMovies] = useState<IMovies>();
  const categories = [ 'now_playing', 'popular', 'top_rated', 'upcoming'  ];

  const getMovies = async () => {
    try {
      categories.map( async (category) => {
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
    }
}

useEffect(() => {
  getMovies()
} , []);


  return <DetailsView movies={movies}/>;
}



