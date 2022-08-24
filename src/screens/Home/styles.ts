import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.overlay};
  flex:1;
  justify-content: space-around;
`;

export const TitleHeaderInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const TitleHeader = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${GlobalStyle.colors.heading};
`;

export const TextColor = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${GlobalStyle.colors.primary};
`;

export const CategoryMovie = styled.Text`
  font-size: 20px;
  margin: 0 0 10px 16px;
  font-weight: bold;
  color: ${GlobalStyle.colors.heading};
`;

