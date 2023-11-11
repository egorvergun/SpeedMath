import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import styles from './Style';
import button from './button';
import navigation from '../App';

export default class ButtonsPage extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.TextComponentStyle}>
          <Text style={{ fontSize: 30 }}>WELCOME</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '5%',
            top: '65%',
          }}>
          
          <View style={{ width: '100%' }}>
            <Button
              title="Play"
              onPress={() => {
                navigation.navigate('ChGr');
              }}
              buttonStyle={{
                width: '100%',
                height: 54,
                backgroundColor: '#846CEB',
                borderRadius: 15,
                //borderWidth: 2,
                //borderColor: 'black',
              }}
              titleStyle={{ color: 'white', fontSize: 20 }}
            />
          </View>
        </View>
      </View>
    );
  }
}
