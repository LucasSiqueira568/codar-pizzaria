import React from 'react';
import Signin from '../Signin'
import Home from '../Home'
import WellCome from '../WellCome'

import DrawerNavigation from '../DrawerNavigation'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator();

export default function Main() {
    return(
        <NavigationContainer >
         <Stack.Navigator initialRouteName="WellCome" screenOptions={{ headerShown: false}}>
             <Stack.Screen name="WellCome" component={WellCome} />
             <Stack.Screen name="Signin" component={Signin} />
             <Stack.Screen name="Home" component={DrawerNavigation} />
         </Stack.Navigator>
        </NavigationContainer>
    );
}