import React from "react";

import { Text, View, StyleSheet } from "react-native";

// import { styles } from './styles';

export default function About() {
  return (
    <View style={styles.container}>
      <Text>Sobre</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
