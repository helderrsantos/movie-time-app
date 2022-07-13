import { api } from "../../api";
import { IMoviesDTO } from "../../types/movies";


export const getMoviesByCategory = async (category: string) => {
  try {
    const response = await api.get(`/movie/${category}`);
    const results: IMoviesDTO[] =  response.data.results

    return results;
  } catch (error) {
    console.warn(error)
    throw new Error('Não foram encontrados filmes para essa categoria')
  }
} 