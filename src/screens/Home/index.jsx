import React, { useState, useEffect} from "react";
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

import api from '../../service/api_pizzas'

import Search  from "../../components/Search";
import Liked from "../../components/Liked";
import Banner from "../../components/Banner";


export default function Home({ navigation }) {
  const [produto, setProduto] = useState([]);

  // função que trás os dados da api
  useEffect(() => {
    api.get("pizza/").then(({data}) => {
      setProduto(data);
    })
  }, [])



  function CardProduct({ pizza }) {
    return (
      <View style={styles.containerBanner}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Details", pizza)}>
          <View>
            <Image
              source={{uri: pizza.image}}
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
                style={{ marginLeft: 10, marginRight: 10 }}
              >
                <Liked />
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
                {produto.desc} Avaliações
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
                  width: 100,
                  height: 24,
                  marginLeft: 10,
                  marginTop: 10,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>R$ {pizza.price.replace('.', ',')}</Text>
              </TouchableOpacity>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginTop: 6, marginRight: 5 }}>
                  <Ionicons name="stopwatch-outline" size={16} color="black" />
                </Text>

                {/* <Text style={{ marginRight: 10, marginTop: 6 }}>
                  {pizza.price}
                </Text> */}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  const  HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Banner />
      
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
            horizontal
            showsHorizontalScrollIndicator={false}
            data={produto}
            renderItem={({ item }) => {
              return <CardProduct pizza={item} />;
            }}
            keyExtractor={(item) => item.id}
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
