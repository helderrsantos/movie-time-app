import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IMoviesDTO } from '../../types/movies';
import { ParamList } from '../../types/navigation';
import { DetailsView } from './view';
import  GlobalStyle  from '../../styles/theme'

export interface IMovies { 
  [key: string] : IMoviesDTO[]
}

type IDetailsProps = NativeStackScreenProps<ParamList, 'Details'>

export function Details({route}: IDetailsProps) {
  const { movie } = route.params;

  return <DetailsView movie={movie}/>;
}



