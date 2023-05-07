import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screen/Home';
import Login from './src/screen/Login';
import Perfil from './src/screen/Perfil';


const App = () =>{

const Stack = createNativeStackNavigator();



 return (
<NavigationContainer>
<Stack.Navigator
screenOptions={{
    headerShown: false
  }}
>
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="Perfil" component={Perfil}/>
</Stack.Navigator>

</NavigationContainer>

    );
  }
export default App;