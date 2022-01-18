import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Movies from './src/Movies';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Details from './src/Details';
import Login from './src/Login';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{headerBackVisible: false}}/>
          <Stack.Screen name="Movies" component={Movies} options={{headerBackVisible: false}}/>
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;
