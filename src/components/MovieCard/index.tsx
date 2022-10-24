import React from 'react';
import { IMoviesDTO } from '../../types/movies';
import { format, utcToZonedTime } from 'date-fns-tz';
import {
    Card,
    ImageWrapper,
    MovieImage,
    MovieInfoWrapper,
    MovieTitle,
    TextDate
} from './style';

export interface IMovieCardProps {
  onPress:() => void;
  data: IMoviesDTO;
  size: 'large' | 'small';
}

export function MovieCard ({ data, size, ...rest } : IMovieCardProps){
  const uri = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  const date = new Date(data.release_date)
  const zonedDate = utcToZonedTime(date, 'Europe/Berlin')
  const formattedDate = format(zonedDate, 'dd.MMM.yyyy')
    
  return(
    <Card size={size}{...rest}>
      <ImageWrapper>
        <MovieImage 
          source={{ uri }}
          size={size}
        />
      </ImageWrapper>

      <MovieInfoWrapper>
        <MovieTitle> {data.title} </MovieTitle>
        <TextDate> {formattedDate} </TextDate> 
      </MovieInfoWrapper>  
    </Card>

)};