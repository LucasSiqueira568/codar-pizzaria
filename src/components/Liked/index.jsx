import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from '../../Theme/COLORS'

import {
    TouchableOpacity
} from 'react-native';

// import { styles } from './styles';

export default function Liked(){
    const [icon, setIcon] = useState()
  return (
    <TouchableOpacity onPress={() => setIcon(!icon)}>
        {icon ? 
        (<AntDesign name="heart"size={22} color={COLORS.red} style={{ marginTop: 10 }}/>) 
        : 
        (<AntDesign name="hearto" size={22} color={COLORS.red} style={{ marginTop: 10 }} />)
        }
    </TouchableOpacity>
  );
}