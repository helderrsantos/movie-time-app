import React from 'react';
import { IMovies } from '.';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { FlatList, ScrollView, Text } from 'react-native';

import {
  Container,
  MovieCard,
  MovieImage,
  MovieTitle,
  MovieCardPrev,
  MovieImagePrev,
  MovieTitlePrev,
  TitleHeader,
  CategoryMovie,
  TextDate,
  TextDatePrev,
} from './styles';

interface IHomeViewProps {
  movies?: IMovies,
  loading: boolean,
  onPressMovie: (titulo: string) => void;
} 

export function HomeView({ movies, loading, onPressMovie }: IHomeViewProps) {

  return (
  <SafeAreaView
    style={{backgroundColor:'#111212'}}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >

      <Container>
          <TitleHeader>
            <Text>
              Movie Time
            </Text>
          </TitleHeader>

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
          renderItem={({ item }) => {

          return (            
            <MovieCard onPress={() => onPressMovie(item.title)} >
              <MovieImage source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}/> 
              <MovieTitle>{item.title}</MovieTitle>
              <TextDate>Lançamento: {item.release_date}</TextDate>  
              </MovieCard>             
          )
        }}
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
          renderItem={({ item }) => {

          return (            
            <MovieCardPrev onPress={() => onPressMovie(item.title)} >
              <MovieImagePrev source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}/> 
              <MovieTitlePrev>{item.title}</MovieTitlePrev>  
              <TextDatePrev>Lançamento: {item.release_date}</TextDatePrev>  
              </MovieCardPrev>             
          )
        }}
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
          renderItem={({ item }) => {

          return (            
            <MovieCardPrev onPress={() => onPressMovie(item.title)} >
               <MovieImagePrev source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}/> 
              <MovieTitlePrev>{item.title}</MovieTitlePrev>  
              <TextDatePrev>Lançamento: {item.release_date}</TextDatePrev>  
               </MovieCardPrev>             
          )
        }}
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
          renderItem={({ item }) => {

          return (            
            <MovieCardPrev onPress={() => onPressMovie(item.title)} >
              <MovieImagePrev source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}/> 
              <MovieTitlePrev>{item.title}</MovieTitlePrev>  
              <TextDatePrev>Lançamento: {item.release_date}</TextDatePrev>  
              </MovieCardPrev>             
           )
         }}
        />
        </>
      }
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}