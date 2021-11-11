import React from 'react';

import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export default function Button(props){
  return (
    <TouchableOpacity style={styles.container}>
        <AntDesign name="shoppingcart" size={28} color="white" style={{marginRight: 5}}/>
        <Text style={styles.text}>
          {props.name}
        </Text>
    </TouchableOpacity>
  );
}