import * as RootNavigation from '../routes/RootNavigation';

export function goToDetails(movie) {
  RootNavigation.navigate('Details', { movie });
}