import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import RootRoute from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' backgroundColor='#8b10ae' />
      <RootRoute />
    </NavigationContainer>
  );
}
