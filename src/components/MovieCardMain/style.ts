import  styled  from "styled-components/native";
import  GlobalStyle  from "../../styles/theme";

interface ISize {
    size: 'large' | 'small';
}

export const Card = styled.TouchableOpacity<ISize>`
width: ${(props) => props.size ? 120 : 140}px;
margin: 0 0 0 15px;
border-radius: 10px;
overflow: hidden;
`;

export const MovieImage = styled.Image<ISize>`
height: ${(props) => props.size ? 230 : 200}px;
width: ${(props) => props.size ? 140 : 120}px;
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