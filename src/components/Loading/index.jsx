import React from "react";

import { View, ActivityIndicator, Modal } from "react-native";
import { COLORS } from "../../Theme/COLORS";


export default function Loading({ visible }) {
  return (
    <Modal transparent visible={visible}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator
        size="large"
        color={COLORS.black}
      />
      </View>
    </Modal>
  );
}