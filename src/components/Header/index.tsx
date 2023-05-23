import React from 'react';
import { View, Text, Image } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import logo from '../../../assets/Nubank_Logo.png';

import { style } from './style';

export default function Header() {
  return (
    <View style={style.Container}>
      <View style={style.Top}>
        <Image source={logo} style={style.Logo} />
        <Text style={style.Title}> Caio </Text>
      </View>
      <MaterialIcons name='keyboard-arrow-down' size={20} color='#fff' />
    </View>
  );
}
