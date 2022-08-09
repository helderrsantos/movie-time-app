import React from "react";
import LottieView from 'lottie-react-native';
import { useNavigation } from "@react-navigation/native";

import {
    Container,
  } from './styles';


export function Splash(){
    const navigation = useNavigation()
    
    return(
        <Container>
            <LottieView 
                source={require('../../assets/splash.json')} 
                autoPlay
                loop={true} 
                speed={1}
            />   
        </Container>
    )
}