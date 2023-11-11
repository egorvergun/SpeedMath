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
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.TextComponentStyle}>
          <Text style={{ fontSize: 30 }}>Choose Grade</Text>
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
                  title="Kindergarten"
                  onPress={() => {
                    GLOBAL.classkg = true;
                    GLOBAL.classone = false;
                    GLOBAL.classsec = false;
                    GLOBAL.classthree = false;
                    GLOBAL.classfth = false;
                    GLOBAL.classfive = false;
                    navigation.navigate('ChCtglow');
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
                  title="First Grade"
                  onPress={() => {
                    GLOBAL.classkg = false;
                    GLOBAL.classone = true;
                    GLOBAL.classsec = false;
                    GLOBAL.classthree = false;
                    GLOBAL.classfth = false;
                    GLOBAL.classfive = false;
                    navigation.navigate('ChCtghigh');
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
                  title="Second Grade"
                  onPress={() => {
                    GLOBAL.classkg = false;
                    GLOBAL.classone = false;
                    GLOBAL.classsec = true;
                    GLOBAL.classthree = false;
                    GLOBAL.classfth = false;
                    GLOBAL.classfive = false;
                    navigation.navigate('ChCtglow');
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
                  title="Three Grade"
                  onPress={() => {
                    GLOBAL.classkg = false;
                    GLOBAL.classone = false;
                    GLOBAL.classsec = false;
                    GLOBAL.classthree = true;
                    GLOBAL.classfth = false;
                    GLOBAL.classfive = false;
                    navigation.navigate('ChCtghigh');
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
                top: '25%',
              }}>
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title="Four Grade"
                  onPress={() => {
                    GLOBAL.classkg = false;
                    GLOBAL.classone = false;
                    GLOBAL.classsec = false;
                    GLOBAL.classthree = false;
                    GLOBAL.classfth = true;
                    GLOBAL.classfive = false;
                    navigation.navigate('ChCtghigh');
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
                  title="Five Grade"
                  onPress={() => {
                    GLOBAL.classkg = false;
                    GLOBAL.classone = false;
                    GLOBAL.classsec = false;
                    GLOBAL.classthree = false;
                    GLOBAL.classfth = false;
                    GLOBAL.classfive = true;
                    navigation.navigate('ChCtghigh');
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
