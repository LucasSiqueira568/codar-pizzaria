import React, { useState } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  StatusBar
} from 'react-native';
import { Feather, AntDesign, Entypo } from '@expo/vector-icons';
import { COLORS } from '../../Theme/COLORS'
import { styles } from './styles';

import Button from '../../components/Button'

export default function Details({ route, navigation }){
    const pizza = route.params;

    const [modalVisible, setModalVisible] = useState(false)

    const [count, setCount ] = useState(1)
    const priceTotal = count * pizza.price;

    function RenderModal() {
        return (
            <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            />
        )
    }

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="transparent" barStyle="dark-content" translucent={true} />
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={30} color="black" />
            </TouchableOpacity>

            <Text style={styles.title}>Detalhes do Produto</Text>

            <TouchableOpacity>
                <AntDesign name="ellipsis1" size={30} color="black" />
            </TouchableOpacity>
        </View>
        
        {/* View que exibe a imagem do produto */}
        <View style={styles.containerProduct}>
            <View style={styles.containerImage}>
                <Image 
                style={styles.image}
                source={{uri: pizza.image}}
                resizeMode="contain"
                />
            </View>

            <View style={styles.containerDescription}>

                <View style={styles.description}>

                    {/* Nome do produto selecionado */}
                    <Text style={styles.name}>{pizza.name}</Text>

                    {/* View que contêm os botões para adionar mais um item ao carrinho */}

                    <View style={styles.containerButtons}>
                        {
                            count == 1 ?
                        <TouchableOpacity style={[styles.button, { opacity: 0.7}]} disabled={true}>
                            <Feather name="minus" size={24} color={COLORS.white} />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.button} onPress={() => setCount(count - 1)}>
                            <Feather name="minus" size={24} color={COLORS.white} />
                        </TouchableOpacity>

                        }

                        <View>
                            <Text style={styles.number}>
                                {count}
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
                            <Entypo name="plus" size={24} color={COLORS.white} />
                        </TouchableOpacity>
                    </View>
                </View>
                
                {/* Descrição do produto */}
                <View style={styles.descriptionProduct}>
                    <Text 
                    onChangeText={() => {RenderModal}}
                    style={styles.descriptionText}>{pizza.desc.slice(0, 450)}</Text>
                </View>
                
                {/* Botão para adicionar o produto ao carrinho */}
                <View style={styles.bottomDescription}>
                    <View style={styles.buttonPrice}>
                        <Text style={styles.priceTitle}>Total:</Text>
                        <Text style={styles.price}>R$ {priceTotal.toFixed(2).replace(".", ",")}</Text>
                    </View>
                    <Button 
                        name="Add ao Carrinho"
                    />
                </View>
            </View>
        </View>

    </View>
  );
}