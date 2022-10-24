import React from "react";
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
  } from './styles';


export function SplashView(){
    const navigation = useNavigation()
    
    return(
        <Container>
                <LottieView 
                    source={require('../../assets/splash.json')}
             
                    autoPlay
                    loop={false}
                    duration={3000}
                    onAnimationFinish={() => navigation.navigate('Home')}
                />   
        </Container>
    )
}