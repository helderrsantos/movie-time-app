import React from 'react';
import { IMovies } from '.';
import { Feather } from '@expo/vector-icons';
import { IMoviesDTO } from '../../types/movies';
import { ActivityIndicator } from 'react-native';
import { FlatList, ScrollView, Alert } from 'react-native';
import { MovieCard } from '../../componentes/MovieCard';

import {
  Container,
  TitleHeader,
  TextColor,
  CategoryMovie,
  TitleHeaderInfo,
} from './styles';

export interface IHomeViewProps {
  movies?: IMovies,
  loading: boolean,
  onPressMovie: (movie: IMoviesDTO) => void;
} 

export function HomeView({ movies, loading, onPressMovie }: IHomeViewProps) {

  return (
    <Container>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
        <TitleHeaderInfo>
          <TitleHeader>
              Movie<TextColor>Time</TextColor>
          </TitleHeader>

          <Feather 
            name='search'
            size={24}
            color='white'
            onPress={()=>Alert.alert('Desculpe o transtorno, em breve estaremos com a busca funcionando')}
          />
        </TitleHeaderInfo>

      <CategoryMovie>
        Em Alta
      </CategoryMovie>
      { 
        loading 
        ? <ActivityIndicator/> 
        : 
        <>
        <FlatList
          horizontal
          data={movies?.['now_playing']}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}   
          renderItem={({ item }) => ( 
            <MovieCard
              width={160}
              height={240}
              onPress={() => onPressMovie(item)}
              data={item}     
            /> )}
        />
        </>
      }
      <CategoryMovie>
        Lançamentos
      </CategoryMovie>
      { 
        loading 
        ? <ActivityIndicator/> 
        : 
        <>
        <FlatList
          horizontal
          data={movies?.['upcoming']}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}  
          renderItem={({ item }) => (
            <MovieCard
              width={160}
              height={240}
              onPress={() => onPressMovie(item)}
              data={item}     
          /> )}
        />
        </>
      }
        <CategoryMovie>
          Mais Votados
        </CategoryMovie>
      { 
        loading 
        ? <ActivityIndicator/> 
        : 
        <>
        <FlatList
          horizontal
          data={movies?.['top_rated']}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}  
          renderItem={({ item }) => (
            <MovieCard
              width={160}
              height={240}
              onPress={() => onPressMovie(item)}
              data={item}     
          /> )}
        />
        </>
      }
      <CategoryMovie>
        Popular
      </CategoryMovie>
      { 
        loading 
        ? <ActivityIndicator/> 
        : 
        <>
        <FlatList
          horizontal
          data={movies?.['popular']}
          keyExtractor={(item) => String(item.id)}
          showsHorizontalScrollIndicator={false}  
          renderItem={({ item }) => ( 
            <MovieCard
              width={160}
              height={240}
              onPress={() => onPressMovie(item)}
              data={item}     
          /> )}
        />
        </>
      }
       
      </ScrollView>
    </Container>
  );
}