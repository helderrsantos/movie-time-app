import React from 'react';
import { IMovies } from '.';
import { FlatList, ScrollView, Text } from 'react-native';
import {  SafeAreaView } from 'react-native';
import { goToDetails } from '../../utils/navigate';



import {
  Container,
  MovieCard,
  MovieImage,
  MovieTitle,
  TextOverview,
  TextVote,
} from './styles';


interface IHomeViewProps {
  movies?: IMovies,
} 

export function DetailsView({ movies }: IHomeViewProps) {

  return (
  <SafeAreaView
    style={{backgroundColor:'#111212'}}>
      <ScrollView
      showsVerticalScrollIndicator={false}
      >

      <Container>
        <FlatList
          data={movies?.['now_playing']}
          keyExtractor={(item) => String(item)}
          showsHorizontalScrollIndicator={false}   
          renderItem={({ item }) => {

          return (            
            <MovieCard>
              <MovieImage source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}/> 
              <MovieTitle>
                {item.title}
              </MovieTitle>

              <TextVote>
                {item.vote_average}   ⭐ ⭐ ⭐ ⭐ ⭐
              </TextVote>

              <TextOverview>
                {item.overview}
              </TextOverview>  
            </MovieCard>             
          )
        }}
        />
      </Container>
      </ScrollView>
  </SafeAreaView>
  );
}
      