import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

export default function Home() {
  return (
    <SafeAreaView style={style.Container}>
      <Header />
      <View style={style.Content}>
        <Menu />
        <View style={style.Card}>
          <View style={style.CardHeader}>
            <MaterialIcons name='attach-money' size={28} color='#666' />
            <MaterialIcons name='visibility-off' size={28} color='#666' />
          </View>
          <View style={style.CardContent}>
            <Text style={style.Title}> Saldo disponível </Text>
            <Text style={style.Description}> R$ 200.500,58 </Text>
          </View>
          <View style={style.CardFooter}>
            <Text style={style.Annotation}>
              {' '}
              Trasferência de R$ 20,00 recebida de Icode Mobile hoje às 06:00h{' '}
            </Text>
          </View>
        </View>
      </View>
      <Tabs />
    </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#8b10ae',
    justifyContent: 'center',
  },
  Content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  Card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginVertical: 0,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  CardContent: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  CardFooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  Title: {
    fontSize: 13,
    color: '#999',
  },
  Description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333',
  },
  Annotation: {
    fontSize: 12,
    color: '#333',
  },
});
