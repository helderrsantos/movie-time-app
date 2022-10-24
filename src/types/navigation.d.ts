import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IMoviesDTO } from './movies';

export type ParamList = {
  Splash: undefined;
  Home: undefined;
  Details: { movie: IMoviesDTO };
};

