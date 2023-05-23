import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { style } from './style';

export default function Menu() {
  return (
    <ScrollView contentContainerStyle={style.Container}>
      <View style={style.Code}>
        <View
          style={{
            width: 80,
            height: 80,
          }}
        />
      </View>
    </ScrollView>
  );
}
