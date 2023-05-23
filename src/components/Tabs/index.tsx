import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { style } from './style';

export default function Tabs() {
  return (
    <View style={style.Container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.TabsContainer}
      >
        <View style={style.TabItem}>
          <MaterialIcons name='person-add' size={24} color='#fff' />
          <Text style={style.TabText}> Indicar amigos </Text>
        </View>
        <View style={style.TabItem}>
          <MaterialIcons name='chat-bubble-outline' size={24} color='#fff' />
          <Text style={style.TabText}> Cobrar </Text>
        </View>
        <View style={style.TabItem}>
          <MaterialIcons name='arrow-downward' size={24} color='#fff' />
          <Text style={style.TabText}> Depositar </Text>
        </View>
        <View style={style.TabItem}>
          <MaterialIcons name='arrow-upward' size={24} color='#fff' />
          <Text style={style.TabText}> Transferir </Text>
        </View>
        <View style={style.TabItem}>
          <MaterialIcons name='lock' size={24} color='#fff' />
          <Text style={style.TabText}> Bloquear cartão </Text>
        </View>
      </ScrollView>
    </View>
  );
}
