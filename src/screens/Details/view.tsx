import React from 'react';
import GlobalStyle from '../../styles/theme';
import { IMoviesDTO } from '../../types/movies';
import { Alert, ScrollView } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MovieCard,
  MovieImage,
  MovieTitle,
  TextOverview,
  TextVote,
  HeaderDetails,
  GoBack,
} from './styles';

interface IDetailsViewProps {
  movie: IMoviesDTO,
} 

export function DetailsView({ movie }: IDetailsViewProps) {
  const navigation = useNavigation();
  const {secondary100} = GlobalStyle.colors;
  
  return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}>         
            <MovieCard>
            	  <HeaderDetails>
            	  	<GoBack>
             	  		<Entypo 
                  		name="chevron-left" 
                  		size={30} 
                  		color={GlobalStyle.colors.heading} 
                  		onPress={() => navigation.goBack()}
                		/>  
            	  	</GoBack>
							  	<GoBack>
            	  		<Feather
                			name="bookmark" 
                			size={24} 
                			color={GlobalStyle.colors.heading} 
                			onPress={()=> Alert.alert('Salvo')}
            	  		/>       
							  	</GoBack>	
          		  </HeaderDetails>
                  <LinearGradient 
                  style={{ height: 260, width:'100%', position:'absolute', zIndex:2}}
                  colors={['rgba(0,0,0,0)', secondary100]}
                  />
                  <MovieImage 
                  resizeMode='cover'
                  source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` }} /> 
                  <MovieTitle>
                   {movie.title}
                  </MovieTitle>
                <TextVote>
                  {movie.vote_average}   ⭐ ⭐ ⭐ ⭐ ⭐
                </TextVote>
                <TextOverview>
                  {movie.overview}
                </TextOverview> 
            </MovieCard> 
          </ScrollView>   
      </Container>
)}
      