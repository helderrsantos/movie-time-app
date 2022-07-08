import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.secondary100};
  align-items: center;
`;

export const MovieCard = styled.TouchableOpacity`
  background-color: ${({theme}) => theme.colors.secondary70 };
  border-radius: 8px;
  width: 360px;
  margin: 8px;
`;

export const MovieImage = styled.Image`
  flex: 2;
  height: 156px;
  overflow: hidden;
`;

export const MovieTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 12px;
  color: ${ ({theme}) => theme.colors.heading };
`;