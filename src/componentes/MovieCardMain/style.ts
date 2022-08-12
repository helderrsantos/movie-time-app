import  styled  from "styled-components/native";
import  GlobalStyle  from "../../styles/theme";

export const Card = styled.TouchableOpacity`
width: 140px;
margin: 0 0 0 15px;
border-radius: 10px;
overflow: hidden;
`;

export const MovieImage = styled.Image.attrs({
    resizeMode: 'cover'
})`
height: 230px;
width: 140px;
`;

export const ImageWrapper = styled.View`

`;

export const MovieInfoWrapper = styled.View`
height: 60px;
width: 100%;
padding: 6px 0 0 0;
`;

export const MovieTitle = styled.Text`
font-size: 12px;
font-weight: bold;
color: ${GlobalStyle.colors.heading};
`;

export const TextDate = styled.Text`
font-size: 10px;
color: ${GlobalStyle.colors.highlight};
`;