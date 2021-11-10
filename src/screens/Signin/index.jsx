import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { COLORS } from '../../Theme/COLORS';
import { MaterialIcons } from '@expo/vector-icons'

import app from '../../Firebase/firebase';

import { styles } from './styles';

export default function Signin({ navigation }){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginFirebase = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
    // ..
  });
    }

    // const loginFirebase = () => {
    //     app.auth().signInWithEmailAndPassword(email, password)
    //     .then(( userCredential) => {
    //       var user = userCredential.user;
    //       loadingLogin()
    //       navigation.navigate("Home", { idUser: user.uid})
    //     })
    //     .catch((error) => {
    //       setError(true)
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //     })
    
    // }    

  return (
    <View style={styles.container}>
        <View style={styles.containerTitle}>
            <TouchableOpacity onPress={() => navigation.navigate("WellCome")} style={styles.arrow}>
                <MaterialIcons name="arrow-back-ios" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>EFETUAR LOGIN</Text>
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

            <TouchableOpacity style={{ marginBottom: 30, width: '90%'}}>
                <Text style={{color: COLORS.black, textAlign: 'right'}}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            {email === "" || password === ""
                ?
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                <Text style={styles.text}>Acessar</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.button} onPress={() => loginFirebase()}>
                <Text style={styles.text}>Acessar</Text>
            </TouchableOpacity>

            }
        </View>
    </View>
  );
}