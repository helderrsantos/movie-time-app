import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';

const { Navigator, Screen} = createBottomTabNavigator();

function Routes() {
    return (
      <NavigationContainer>
        <Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
          <Screen name="Splash" component={Splash} />
          <Screen name="Home" component={Home} options={{tabBarIcon: ({ color, size }) => (<Entypo name="home" size={26} color="black" /> ),}}/>
          <Screen name="Details" component={Details} />
        </Navigator>
      </NavigationContainer>
    );
  }

  export default Routes;