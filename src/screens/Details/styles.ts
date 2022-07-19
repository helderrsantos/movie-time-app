import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.secondary100};
  width:100%;
  `;

export const MovieCard = styled.View`
  background-color: ${GlobalStyle.colors.secondary100};
  width: 100%;
  height: 390px;
  justify-content: center;
  margin-bottom: 5px;
`;

export const MovieImage = styled.Image`
  height: 190px;
  width: 100%;
`;

export const MovieTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: ${GlobalStyle.colors.heading};
`;
export const TextVote = styled.Text`
  font-size: 12px;
  text-align: center;
  font-weight: bold;
  color: '#fc9803';
`;

export const TextOverview = styled.Text`
  font-size: 12px;
  text-align: justify;
  margin: 10px;
  color: ${GlobalStyle.colors.highlight};
`;

