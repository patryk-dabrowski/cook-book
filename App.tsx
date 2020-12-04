import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
