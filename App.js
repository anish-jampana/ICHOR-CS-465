import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './app/screens/MainScreen';
import ImportScreen from './app/screens/ImportScreen';
import GraphScreen from './app/screens/GraphScreen';
import LogInScreen from './app/screens/LogInScreen';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LogIn' component={LogInScreen}/>
        <Stack.Screen name="Main" component={MainScreen}/>
        <Stack.Screen name="Import" component={ImportScreen}/>
        <Stack.Screen name="Graph" component={GraphScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
