import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./app/screens/MainScreen";
import ImportScreen from "./app/screens/ImportScreen";
import GraphScreen from "./app/screens/GraphScreen";
import LogInScreen from "./app/screens/LogInScreen";
import React, { createContext, useState } from "react";
import { TestDataProvider } from "./app/components/TestDataProvider.js";
import { BiomarkerProvider } from "./app/components/BiomarkerProvider.js";
import { BiomarkerInfoProvider } from "./app/components/BiomarkerInfoProvider";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BiomarkerInfoProvider>
      <BiomarkerProvider>
        <TestDataProvider>
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
                    backgroundColor: "#D3D3D3",
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
                  title: "Biomarkers",
                  headerStyle: {
                    backgroundColor: "#D3D3D3", //used to be blue
                  },
                  headerTintColor: "#466B7A", //used to be white
                  headerTitleStyle: {
                    fontWeight: "600",
                    fontSize: 25,
                    fontWeight: "bold"
                  },
                }}
              />
              <Stack.Screen
                name="Import"
                component={ImportScreen}
                options={{
                  title: "MY BLOOD TESTS",
                  headerStyle: {
                    backgroundColor: "#D3D3D3",
                  },
                  headerTintColor: "#466B7A",
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
                    backgroundColor: "#D3D3D3",
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
        </TestDataProvider>
      </BiomarkerProvider>
    </BiomarkerInfoProvider>
  );
}
