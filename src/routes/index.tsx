import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Money from '../screens/Money';
import Bag from '../screens/Bag';

const BottomTabs = createBottomTabNavigator();

export default function RootRoute() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <BottomTabs.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='home' size={28} color='#666' />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Money'
        component={Money}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='attach-money' size={28} color='#666' />
          ),
        }}
      />
      <BottomTabs.Screen
        name='Bag'
        component={Bag}
        options={{
          tabBarIcon: () => (
            <MaterialIcons name='shopping-bag' size={28} color='#666' />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
