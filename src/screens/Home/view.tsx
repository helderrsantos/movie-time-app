import React from 'react';
import { FlatList, Text } from 'react-native';
import { IMoviesDTO } from '../../types/movies';

import {
  Container,
  MovieCard,
  MovieImage,
  MovieTitle,
  TitleHeader,
  CategoryMovie,
} from './styles';

interface IHomeViewProps {
  movies: IMoviesDTO[]
  onPressMovie: (titulo: string) => void;
} 

export function HomeView({ movies, onPressMovie }: IHomeViewProps) {

  return (
    <Container>
      <TitleHeader>
        <Text>
          Movie Time
        </Text>
      </TitleHeader>
      <CategoryMovie>
          Lançamentos
        </CategoryMovie>
       <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => {

          return (            
            <MovieCard onPress={() => onPressMovie(item.title)} >
              <MovieImage source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}/> 
              <MovieTitle>{item.title}</MovieTitle>  
              </MovieCard>             
          )
        }}
      />
    </Container>
  );
}