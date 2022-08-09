import styled from 'styled-components/native';
import GlobalStyle from '../../styles/theme';

export const Container = styled.View`
  background-color: ${GlobalStyle.colors.overlay};
  flex: 1;
`;

export const HeaderDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  position: absolute;
  z-index:1;
  width: 100%;
`;

export const GoBack = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.3);
`;

export const MovieCard = styled.View`
  background:${GlobalStyle.colors.overlay}
`;

export const MovieImage = styled.Image`
  height: 260px;
`;

export const MovieTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  color: ${GlobalStyle.colors.heading};
`;
export const TextVote = styled.Text`
  font-size: 12px;
  text-align: center;
  color: ${GlobalStyle.colors.line};
`;

export const TextOverview = styled.Text`
  font-size: 15px;
  text-align: justify;
  margin: 10px;
  color: ${GlobalStyle.colors.highlight};
`;

