import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";

import { styles } from "./styles";
import { COLORS } from "../../Theme/COLORS";
import { data } from "../../data/pizzas";

export default function screens() {
  const [icon, setIcon] = useState(false);

  function RenderProducts({ pizza }) {
    return (
      <View style={styles.containerBanner}>
        <TouchableOpacity>
          <View>
            <Image
              source={pizza.url}
              style={{
                width: "100%",
                height: 100,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.nameProduct}>{pizza.name}</Text>
              <TouchableOpacity
                onPress={() => setIcon(!icon)}
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                {icon ? (
                  <AntDesign
                    name="heart"
                    size={22}
                    color={COLORS.red}
                    style={{ marginTop: 10 }}
                  />
                ) : (
                  <AntDesign
                    name="hearto"
                    size={22}
                    color={COLORS.red}
                    style={{ marginTop: 10 }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <View
              style={{ flexDirection: "row", marginTop: 10, marginLeft: 10 }}
            >
              <AntDesign name="star" size={15} color={COLORS.primary} />
              <AntDesign name="star" size={15} color={COLORS.primary} />
              <AntDesign name="star" size={15} color={COLORS.primary} />
              <AntDesign name="star" size={15} color={COLORS.primary} />
              <AntDesign
                name="star"
                size={15}
                color={COLORS.primary}
                style={{ opacity: 0.2 }}
              />

              <Text style={{ fontSize: 12, marginLeft: 10 }}>
                {pizza.avaliations} Avaliações
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.secondary,
                  width: 70,
                  height: 24,
                  marginLeft: 10,
                  marginTop: 10,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 12 }}>{pizza.nationality}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: COLORS.secondary,
                  width: 70,
                  height: 24,
                  marginTop: 10,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 12 }}>{pizza.size}</Text>
              </TouchableOpacity>

              <View>
                <Text style={{ marginRight: 10, marginTop: 6}}>
                  {pizza.timeMin} - {pizza.timeMax}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{width: '100%', height: '100%'}}>
          <Image
            style={styles.image}
            source={require("../../assets/10882.png")}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleBanner}>
          <Text style={styles.text}>Pegue Uma Fatia</Text>
        </View>

        <View>
          <Text style={styles.textProduct}>POPULARES</Text>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              return <RenderProducts pizza={item} />;
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
}
