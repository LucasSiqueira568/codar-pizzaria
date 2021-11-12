import React from "react";
import { COLORS } from '../../Theme/COLORS'
import { View, Text, Image, StyleSheet } from "react-native";


export default function Banner() {
  return (
    <View style={{ width: "100%", height: 150 }}>
      <Image
        style={styles.image}
        source={require("../../assets/10882.png")}
        resizeMode="cover"
      />
      <View style={styles.titleBanner}>
        <Text style={styles.text}>Pegue Uma Fatia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  titleBanner: {
    position: 'absolute',
    bottom: '40%',
    left: 20,
  },
  text: {
    color: COLORS.white,
    fontSize: 26,
    borderColor: COLORS.grey
  }
})
