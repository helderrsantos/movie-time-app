import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, ScrollView } from 'react-native';
import { IMoviesDTO } from '../../types/movies';
import GlobalStyle from '../../styles/theme';
import { Entypo, Feather } from '@expo/vector-icons'; 

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
import { LinearGradient } from 'expo-linear-gradient';

interface IDetailsViewProps {
  movie: IMoviesDTO,
} 

export function DetailsView({ movie }: IDetailsViewProps) {
  const navigation = useNavigation();
  const {secondary30} = GlobalStyle.colors;
  
  return (
      <Container>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >         
           <LinearGradient
                colors={["#171821", secondary30]}>
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
                colors={["gray", "#ffffff00"]}>
                <MovieImage source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}` }} /> 
              </LinearGradient>

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
            </LinearGradient>
          </ScrollView>   
      </Container>
)}
      