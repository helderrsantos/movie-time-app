import React from "react";
import LottieView from 'lottie-react-native';

import {
    Container,
  } from './styles';


export function SplashView(){
    
    return(
        <Container>
                <LottieView 
                    source={require('../../assets/splash.json')}
                    loop={true}  
                    autoPlay
                    speed={1}  
                    style={{width:220}}                
                />   
        </Container>
    )
}