import React from "react";

import { View, Text, StyleSheet } from "react-native";

// import { styles } from './styles';

export default function Plan() {
  return (
    <View style={styles.container}>
      <Text>Planos</Text>
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
