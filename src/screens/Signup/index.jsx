import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { COLORS } from '../../Theme/COLORS';
import { MaterialIcons } from '@expo/vector-icons'

import firebase from '../../Firebase/firebase';
import Loading from '../../components/Loading'

import { styles } from './styles';

export default function Signup({ navigation }){

    const [visible, setVisible] = useState(false);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loadingLogin = () => {
        setVisible(true)
      }


    const loginFirebase = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(( userCredential) => {
        var user = userCredential.user;
        loadingLogin()
        navigation.navigate("Home", { idUser: user.uid})
        })
        .catch((error) => {
        // setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
        })

    }

  return (
    <View style={styles.container}>
        <Loading visible={visible}/>
        <View style={styles.containerTitle}>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")} style={styles.arrow}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>CADASTRE-SE</Text>
        </View>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor={COLORS.textColor}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor={COLORS.textColor}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            
            {email === "" || password === "" || password.length < 6
                ?
            <TouchableOpacity 
            style={[styles.button, {opacity: 0.7}]} onPress={() => navigation.navigate("Home")}
            disabled={true}
            >
                <Text style={styles.text}>Registre-se</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.button} onPress={() => loginFirebase()}>
                <Text style={styles.text}>Registre-se</Text>
            </TouchableOpacity>

            }
        </View>
    </View>
  );
}