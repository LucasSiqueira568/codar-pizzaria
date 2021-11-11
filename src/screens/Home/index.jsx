import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
} from "react-native";

import SubHeader from "../../components/SubHeader";

import { styles } from "./styles";
import { COLORS } from "../../Theme/COLORS";
import { data } from "../../data/pizzas";
import { Search } from "../../components/Search";

export default function Home({ navigation }) {
  const [icon, setIcon] = useState(false);

  function RenderProducts({ pizza }) {
    return (
      <View style={styles.containerBanner}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="light-content"
          translucent={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Details", pizza)}>
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

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginTop: 6, marginRight: 5 }}>
                  <Ionicons name="stopwatch-outline" size={16} color="black" />
                </Text>

                <Text style={{ marginRight: 10, marginTop: 6 }}>
                  {pizza.timeMin} - {pizza.timeMax}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function HomeScreen() {
    return (
      <View style={styles.container}>
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


        {/* Sub header da aplicação com menus */}
        <View style={{ width: "100%" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Search />
          </View>
          <Text style={styles.textProduct}>NOSSO CARDÁPIO</Text>
        </View>
        <SubHeader />

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
      </View>
    );
  }
  return (
    <ScrollView>
      <HomeScreen />
    </ScrollView>
  );
}
