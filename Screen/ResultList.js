import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
  RefreshControl,
  Alert,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { List } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Button } from 'react-native-elements';
import GLOBAL from './global';
import styles from './Style';
import button from './button';
import navigation from '../App';
import { makeStyles } from '@material-ui/core/styles';
import { SectionList, FlatList } from 'react-native';

export default class ButtonsPage extends Component {
  render() {
    var pr = GLOBAL.pr;
    var q = pr.length / 5;

    const cr = (b) => {
      if (GLOBAL.trueans[b] == GLOBAL.z[b]) {
        return 'correct';
      } else {
        return 'uncorrect';
      }
    };

    const Asterics = ({ i, x = 0, y = 5, c = 0, b = 0, v = 1 }) => (
      <View>
        <List.Section style={{ width: '100%' }}>
          <List.Accordion
            style={{ width: '100%' }}
            title={cr(b)}
            left={(props) => <Text>{v}.</Text>}>
            <List.Item title={GLOBAL.pr.slice(x, y)} />
            <List.Item title={GLOBAL.z[c]} />
          </List.Accordion>
          {i > 0 && (
            <RAsterics
              i={i - 1}
              x={x + 5}
              y={y + 5}
              c={c + 1}
              b={b + 1}
              v={v + 1}
            />
          )}
        </List.Section>
      </View>
    );
    const RAsterics = (props) => <Asterics {...props} />;
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

        <View style={{ alignItems: 'center' }}>
          <ScrollView style={styles.scrollView}>
            <Asterics i={q - 1} />
          </ScrollView>
        </View>
      </View>
    );
  }
}
