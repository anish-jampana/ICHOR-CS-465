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
      <Stack.Navigator
        screenOptions={{ headerShown: true, headerShadowVisible: false }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            title: "LOG IN",
            headerStyle: {
              backgroundColor: "#bec1c2",
            },
            headerTintColor: "#466B7A",
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "BIOMARKERS",
            headerStyle: {
              backgroundColor: "#bec1c2", //used to be blue
            },
            headerTintColor: "#466B7A", //used to be white
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 25
            },
          }}
        />
        <Stack.Screen
          name="Import"
          component={ImportScreen}
          options={{
            title: "MY BLOOD TESTS",
            headerStyle: {
              backgroundColor: "#466B7A",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />
        <Stack.Screen
          name="Graph"
          component={GraphScreen}
          options={{
            title: "BREAKDOWN",
            headerStyle: {
              backgroundColor: "#bec1c2",
            },
            headerTintColor: "#466B7A",
            headerTitleStyle: {
              fontWeight: "600",
              fontSize: 25,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
