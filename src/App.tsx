import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from './screens/DetailsScreen';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;
