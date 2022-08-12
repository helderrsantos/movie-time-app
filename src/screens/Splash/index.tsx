import React , {useEffect} from "react";
import { SplashView } from "./view";
import { ParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export function Splash({navigation}: NativeStackScreenProps<ParamList, 'Splash'>){

useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 3000);
},[]);
    
    return <SplashView />;
}