import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.secondary100};
  flex:1;
  justify-content: space-around;
`;

export const TitleHeader = styled.Text`
  font-size: 30px;
  background-color: ${GlobalStyle.colors.secondary100};
  margin-top: 10px;
  margin-bottom:10px;
  font-weight: bold;
  padding: 10px;
  color: ${GlobalStyle.colors.heading};
`;

export const CategoryMovie = styled.Text`
  font-size: 20px;
  padding-left: 10px;
  margin-bottom: 5px;
  font-weight: bold;
  color: ${GlobalStyle.colors.heading};
`;

export const MovieCard = styled.TouchableOpacity`
  background-color: ${GlobalStyle.colors.secondary100};
  width: 150px;
  height: 270px;
  margin: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const MovieImage = styled.Image`
  height: 230px;
  width: 155px
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
  width: 140px;
  height: 240px;
  margin-left: 10px;
  justify-content: center;
  margin-bottom: 15px;
`;

export const MovieImagePrev = styled.Image`
  height: 200px;
  width: 135px;
  border-radius: 10px; 
`;

export const MovieTitlePrev = styled.Text`
  font-size: 11px;
  font-weight: bold;
  padding-top: 4px;
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
