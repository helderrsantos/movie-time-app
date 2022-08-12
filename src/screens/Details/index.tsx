import React from 'react';
import { DetailsView } from './view';
import { IMoviesDTO } from '../../types/movies';
import { ParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export interface IMovies { 
  [key: string] : IMoviesDTO[]
}

type IDetailsProps = NativeStackScreenProps<ParamList, 'Details'>

export function Details({route}: IDetailsProps) {
  const { movie } = route.params;

  return <DetailsView movie={movie}/>;
}



