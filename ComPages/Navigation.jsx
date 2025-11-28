import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import GroceryList from '../components/GroceryList';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="GroceryList" component={GroceryList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
