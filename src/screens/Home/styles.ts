import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.secondary100};
  flex: 1;
`;

export const MovieCard = styled.TouchableOpacity`
  background-color: ${GlobalStyle.colors.secondary90};
  width: 180px;
  height: 270px;
  justify-content: center;
  align-items: center;
`;

export const MovieImage = styled.Image`
  height: 220px;
  width: 160px
  border-radius: 10px; 
`;

export const MovieTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
  padding: 8px;
  color: ${GlobalStyle.colors.heading};
`;

export const TitleHeader = styled.Text`
  font-size: 30px;
  background-color: ${GlobalStyle.colors.secondary100};
  margin-top: 20px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
  width: 100%;
  color: ${GlobalStyle.colors.heading};
`;

export const CategoryMovie = styled.Text`
  font-size: 20px;
  padding-left: 10px;
  color: ${GlobalStyle.colors.heading};
`;
