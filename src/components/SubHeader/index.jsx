import React, { useState } from "react";

import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { COLORS } from "../../Theme/COLORS";

import { styles } from "./styles";

const categories = [
  {id: 1, name: "Todas (170)"},
  {id: 2, name: "Brasileira"},
  {id: 3, name: "Italiana"},
]

export default function SubHeader() {
  const [menuSelected, setMenuSelected] = useState(1);

  function RenderItem({ pizza }) {
    return (
      <View style={styles.containerMenu}>

        <TouchableOpacity
        style={[styles.button, {backgroundColor: menuSelected == pizza.id ? COLORS.primary : COLORS.white}]}
        onPress={() => setMenuSelected(pizza.id)}
        >
            {
            menuSelected == pizza.id &&
              <Text style={{color: COLORS.white}}>
                {pizza.name}
              </Text>
            }

            {menuSelected != pizza.id &&
              <Text style={{color: COLORS.black}}>
                {pizza.name}
                </Text>
            }
        </TouchableOpacity>

      </View>
    );
  }



  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={({item}) => {
          return <RenderItem pizza={item}/>
        }}
        keyExtractor={item => `${item.id}`}
        horizontal
      />
    </View>
  );
}
