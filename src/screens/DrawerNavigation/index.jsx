import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { COLORS } from '../../Theme/COLORS'
import { AntDesign, Entypo  } from '@expo/vector-icons'


import Home from '../Home'
import Plan from '../Plan'
import Contacts from '../Contacts'
import About from '../About'

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return(
    <Drawer.Navigator screenOptions={{
       headerShown: false,
       drawerActiveBackgroundColor: COLORS.primary,
       drawerContentStyle:{
         backgroundColor: COLORS.secondary,
       }
       }}>
      <Drawer.Screen 
      name="Home" 
      component={Home}
      options={{
        drawerActiveTintColor: COLORS.white,
        drawerIcon: ({color, focused}) => (
          <AntDesign name="home" size={24} color={focused ? COLORS.white : color }/>
        ),
      }}
      
      />
      <Drawer.Screen 
      name="Sobre" 
      component={About}
      options={{
        drawerActiveTintColor: COLORS.white,
        drawerIcon: ({color, focused}) => (
          <AntDesign name="infocirlceo" size={24} color={focused ? COLORS.white : color }/>
          ),
      }}
      />
      <Drawer.Screen 
      name="Planos" 
      component={Plan}
      options={{
        drawerActiveTintColor: COLORS.white,
        drawerIcon: ({color, focused}) => (
          <Entypo  name="open-book" size={24} color={focused ? COLORS.white : color }/>
        ),
      }}
      />
      <Drawer.Screen 
      name="Contato" 
      component={Contacts}
      options={{
        drawerActiveTintColor: COLORS.white,
        drawerIcon: ({color, focused}) => (
          <AntDesign name="contacts" size={24} color={focused ? COLORS.white : color} />
        ),
      }}
      />
   </Drawer.Navigator>
);
}