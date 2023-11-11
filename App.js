//все компоненты

import * as React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Text,
  ScrollView,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

//навигатор (переход к скринам и стилям)

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

function onPress(navigation) {
  onPress();
}

//кнопки

import { Button } from 'react-native-elements';

//скрины и стили

import styles from './Screen/Style';
import Hello from './Screen/Hello';
import ChGr from './Screen/ChGr';
import ChCtglow from './Screen/ChCtglow';
import ChCtghigh from './Screen/ChCtghigh';
import ChMode from './Screen/ChMode';
import Ex from './Screen/Ex';
import ResultList from './Screen/ResultList';

//адрессация скринов

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Hello"
          component={Hello}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ChGr"
          component={ChGr}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ChCtglow"
          component={ChCtglow}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ChCtghigh"
          component={ChCtghigh}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ChMode"
          component={ChMode}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="Ex"
          component={Ex}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="ResultList"
          component={ResultList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;