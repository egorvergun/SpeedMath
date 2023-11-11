import React, { useState, Component } from 'react';
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
import GLOBAL from './global';
import { createStackNavigator } from '@react-navigation/stack';
import { Picker } from '@react-native-picker/picker';
import 'react-native-gesture-handler';
import { List } from 'react-native-paper';
import { Button } from 'react-native-elements';
import styles from './Style';
import button from './button';
import navigation from '../App';

function Pic({ navigation }) {
  const [selectedValue, setSelectedValue] = useState(4);
  const [selectedValuet, setSelectedValuet] = useState(15);
  GLOBAL.counter = selectedValue;
  GLOBAL.timer = selectedValuet;
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
        <Text style={{ fontSize: 30 }}>Choose Mode</Text>
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
                title="Counter Mode"
                onPress={() => {
                  GLOBAL.countertrue = true;
                  GLOBAL.timertrue = false;
                  navigation.navigate('Ex');
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
                title="Time Mode"
                onPress={() => {
                  GLOBAL.timertrue = true;
                  GLOBAL.countertrue = false;
                  navigation.navigate('Ex');
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
              <View
                style={{
                  width: '100%',
                  height: 54,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  //borderWidth: 2,
                  //borderColor: 'black',

                }}>
                <Picker
                  selectedValuet={selectedValuet}
                  style={{
                    width: '100%',
                    height: 54,
                  }}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="4 examples" value={4} />
                  <Picker.Item label="16 examples" value={16} />
                  <Picker.Item label="32 examples" value={32} />
                  <Picker.Item label="64 examples" value={64} />
                </Picker>
              </View>
            </View>
            <View style={{ width: '48%' }}>
              <View
                style={{
                  width: '100%',
                  height: 54,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  //borderWidth: 2,
                  //borderColor: 'black',
                }}>
                <Picker
                  selectedValuet={selectedValuet}
                  style={{
                    width: '100%',
                    height: 54,
                  }}
                  onValueChange={(itemValuet, itemIndext) =>
                    setSelectedValuet(itemValuet)
                  }>
                  <Picker.Item label="15 seconds" value={15} />
                  <Picker.Item label="30 seconds" value={30} />
                  <Picker.Item label="45 seconds" value={45} />
                  <Picker.Item label="60 seconds" value={60} />
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Pic;
