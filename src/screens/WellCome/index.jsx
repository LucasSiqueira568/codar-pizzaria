import React from 'react';

import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import {LinearGradient  } from 'expo-linear-gradient'

import { styles } from './styles';

export default function WellCome({ navigation }){
  return (
    <View style={styles.container}>
        <View style={styles.containerImage}>
            <Image
                style={styles.image}
                source={require('../../assets/wellcome.png')}
                resizeMode="cover"
            />

            <LinearGradient 
            style={styles.containerDescription}
            colors={["transparent","transparent", "#000"]}
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 0.3 }}
            locations={[0.2, 0.0, 0.9]}
            >
                <Text style={styles.titleDescription}>Codar Pizzaria</Text>
                <Text style={styles.subTitleDescription}>PEGUE UMA FATIA</Text>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.text}>Começar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>


    </View>
  );
}