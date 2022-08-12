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
}

export function MovieCardSmall ({ data, ...rest } : IMovieCardProps){
  const uri = `https://image.tmdb.org/t/p/w500${data.poster_path}`;

  const date = new Date(data.release_date)
  const timeZone = 'Europe/Berlin'
  const zonedDate = utcToZonedTime(date, timeZone)
  const output = format(zonedDate, 'dd.MMM.yyyy')
    
  return(
    <Card {...rest}>
      <ImageWrapper>
        <MovieImage 
          source={{ uri }}
        />
      </ImageWrapper>

      <MovieInfoWrapper>
        <MovieTitle> {data.title} </MovieTitle>
        <TextDate> {output} </TextDate> 
      </MovieInfoWrapper>  
    </Card>

)};