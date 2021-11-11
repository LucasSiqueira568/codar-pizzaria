import React from 'react';
import Signin from '../Signin'
import Signup from '../Signup'
import WellCome from '../WellCome'
import Details from '../Details'

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
             <Stack.Screen name="Signup" component={Signup} />
             <Stack.Screen name="Details" component={Details} />
             <Stack.Screen name="Home" component={DrawerNavigation} />
         </Stack.Navigator>
        </NavigationContainer>
    );
}