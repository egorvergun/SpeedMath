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
import GLOBAL from './global';
import styles from './Style';
import button from './button';
import navigation from '../App';

export default class ButtonsPage extends Component {
  constructor() {
    super();
    this.state = {
      znakplus: false,
      znakmult: false,
    };
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.containerBoxShort}>
            <Button
              style={styles.button}
              underlayColor={'#ffffff'}
              title="Back"
              onPress={() => navigation.navigate('ChGr')}
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
        <View style={styles.TextComponentStyle}>
          <Text style={{ fontSize: 30 }}>Choose Your</Text>
          <Text style={{ fontSize: 30 }}>Categories</Text>
        </View>
        <View style={styles.containerBox}>
          <View style={styles.btm}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
                top: '15%',
              }}>
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title="Plus"
                  onPress={() => {
                    GLOBAL.chooseDL = false;
                    GLOBAL.choosemult = false;
                    GLOBAL.chooseminus = false;
                    GLOBAL.chooseplus = true;
                    navigation.navigate('ChMode');
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
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title="Minus"
                  onPress={() => {
                    GLOBAL.chooseDL = false;
                    GLOBAL.choosemult = false;
                    GLOBAL.chooseminus = true;
                    GLOBAL.chooseplus = false;
                    navigation.navigate('ChMode');
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

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
                top: '20%',
              }}>
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title="Mulltiplicate"
                  onPress={() => {
                    GLOBAL.chooseDL = false;
                    GLOBAL.choosemult = true;
                    GLOBAL.chooseminus = false;
                    GLOBAL.chooseplus = false;
                    navigation.navigate('ChMode');
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
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title="Division"
                  onPress={() => {
                    GLOBAL.chooseDL = true;
                    GLOBAL.choosemult = false;
                    GLOBAL.chooseminus = false;
                    GLOBAL.chooseplus = false;
                    navigation.navigate('ChMode');
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
        </View>
      </View>
    );
  }
}
