import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Money from '../screens/Money';
import Bag from '../screens/Bag';

const BottomTabs = createBottomTabNavigator();

export default function RootRoute() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: 'home' | 'attach-money' | 'shopping-bag' = 'home';
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Money') {
            iconName = 'attach-money';
          } else {
            iconName = 'shopping-bag';
          }
          return (
            <MaterialIcons name={iconName} size={size + 2} color={color} />
          );
        },
        tabBarActiveTintColor: '#302b2b',
        tabBarInactiveTintColor: '#757373',
        tabBarStyle: {
          position: 'absolute',
          bottom: 15,
          width: '50%',
          left: 90,
          borderRadius: 30,
          elevation: 0,
        },
      })}
    >
      <BottomTabs.Screen name='Home' component={Home} />
      <BottomTabs.Screen name='Money' component={Money} />
      <BottomTabs.Screen name='Bag' component={Bag} />
    </BottomTabs.Navigator>
  );
}
