import React, { useEffect, useState } from 'react';
import { View, Text, Alert, SafeAreaView, StyleSheet, ActivityIndicator, ScrollView, RefreshControl, Image } from 'react-native';
import * as Location from 'expo-location';
import Weather from './src';
import Days from './src/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

 const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Weather"
                    component={Weather}
                    options={{
                        headerShown: false
                    }}
                    />
                <Stack.Screen
                    name="Profile"
                    component={Days}
                    options={{
                        headerShown: false
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>


    )
}

export default App;



