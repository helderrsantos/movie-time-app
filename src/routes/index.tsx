import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Details } from '../screens/Details';
import { Feather } from '@expo/vector-icons';
import GlobalStyle from '../styles/theme';
import { SearchBar,  } from 'react-native-screens';

const { Navigator: NavigatorStack, Screen: StackScreen } = createNativeStackNavigator();
const { Navigator: NavigatorTab, Screen: TabScreen } = createBottomTabNavigator();

function Tabs() {
  return (
    <NavigatorTab screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: GlobalStyle.colors.primary,
        tabBarInactiveTintColor: GlobalStyle.colors.highlight,
        tabBarStyle: { backgroundColor: GlobalStyle.colors.overlay }
      }}>
      <TabScreen name="Home" component={Home} options={{ tabBarIcon: ({ color, size }) => (<Feather name="home" size={size} color={color} /> ) }}/>
      <TabScreen name="Search" component={SearchBar} options={{ tabBarIcon: ({ color, size }) => (<Feather name="search" size={size} color={color} /> ) }}/>
      <TabScreen name="Menu" component={Splash} options={{ tabBarIcon: ({ color, size }) => (<Feather name="menu" size={size} color={color} /> ) }}/>
    </NavigatorTab>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <NavigatorStack initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <StackScreen name="Splash" component={Splash} />
        <StackScreen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <StackScreen name="Details" component={Details} />
      </NavigatorStack>
    </NavigationContainer>
  );
}

export default Routes;