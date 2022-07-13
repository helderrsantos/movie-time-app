import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.secondary100};
  width:100%;
`;

export const MovieCard = styled.TouchableOpacity`
  background-color: ${GlobalStyle.colors.secondary100};
  width: 150px;
  height: 270px;
  margin-left: 11px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const MovieImage = styled.Image`
  height: 230px;
  width: 145px
  border-radius: 10px; 
`;

export const MovieTitle = styled.Text`
  font-size: 11px;
  font-weight: bold;
  padding-top: 4px;
  color: ${GlobalStyle.colors.heading};
`;

export const MovieCardPrev = styled.TouchableOpacity`
  background-color: ${GlobalStyle.colors.secondary100};
  width: 120px;
  height: 250px;
  margin-left: 12px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const MovieImagePrev = styled.Image`
  height: 200px;
  width: 115px;
  border-radius: 10px; 
`;

export const MovieTitlePrev = styled.Text`
  font-size: 11px;
  font-weight: bold;
  padding-top: 4px;
  color: ${GlobalStyle.colors.heading};
`;

export const TitleHeader = styled.Text`
  font-size: 30px;
  background-color: ${GlobalStyle.colors.secondary100};
  margin-top: 10px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  width: 100%;
  color: ${GlobalStyle.colors.heading};
`;

export const CategoryMovie = styled.Text`
  font-size: 20px;
  padding-left: 2px;
  margin: 10px;
  font-weight: bold;
  color: ${GlobalStyle.colors.heading};
`;

export const TextDate = styled.Text`
  font-size: 8px;
  color: ${GlobalStyle.colors.highlight};
`;

export const TextDatePrev = styled.Text`
  font-size: 8px;
  color: ${GlobalStyle.colors.highlight};
`
