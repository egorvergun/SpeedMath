import React, { Component, useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
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
import Constants from 'expo-constants';
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
      pr: [],
      z: [],
      count: 1,
      trueans: [],
    };
  }

  increment = (step) => {
    this.setState({
      count: this.state.count + step,
    });
  };

  choose = ({ navigation }) => {
    if (GLOBAL.timertrue == true) {
      return (
        <View
          style={{
            width: 54,
            height: 54,
            marginLeft: '32%',
          }}>
          <CountdownCircleTimer
            isPlaying
            duration={GLOBAL.timer}
            size={60}
            onComplete={() => {
              GLOBAL.pr = this.state.pr;
              GLOBAL.z = this.state.z;
              GLOBAL.trueans = this.state.trueans;
              navigation.navigate('ResultList');
            }}
            colors={[
              ['#004777', 0.4],
              ['#F7B801', 0.4],
              ['#A30000', 0.2],
            ]}>
            {({ remainingTime, animatedColor }) => (
              <Animated.Text style={{ color: animatedColor, fontSize: 20 }}>
                {remainingTime}
              </Animated.Text>
            )}
          </CountdownCircleTimer>
        </View>
      );
    }
  };

  render() {
    const UrgeWithPleasureComponent = () => (
      <View
        style={{
          width: 54,
          height: 54,
          marginLeft: '40%',
        }}>
        <CountdownCircleTimer
          isPlaying
          duration={GLOBAL.timer}
          size={60}
          onComplete={() => {
            GLOBAL.pr = this.state.pr;
            GLOBAL.z = this.state.z;
            GLOBAL.trueans = this.state.trueans;
            navigation.navigate('ResultList');
          }}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000', 0.2],
          ]}>
          {({ remainingTime, animatedColor }) => (
            <Animated.Text style={{ color: animatedColor, fontSize: 20 }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
    );

    const primer = () => {
      if (GLOBAL.chooseplus == true) {
        return (
          <Text>
            {random[0]} + {random[1]} = ?
          </Text>
        );
      } else if (GLOBAL.chooseminus == true) {
        return (
          <Text>
            {random[0]} - {random[1]} = ?
          </Text>
        );
      } else if (GLOBAL.choosemult == true) {
        return (
          <Text>
            {random[0]} * {random[1]} = ?
          </Text>
        );
      } else if (GLOBAL.chooseDL == true) {
        return (
          <Text>
            {random[0]} / {random[1]} = ?
          </Text>
        );
      }
    };

    if (GLOBAL.classkg == true) {
      if (GLOBAL.chooseplus == true) {
        var RandomNumber1 = Math.floor(Math.random() * 20) + 5;
        var RandomNumber2 = Math.floor(Math.random() * 20) + 5;
        var RandomSum = RandomNumber1 + RandomNumber2;

        var RandomFakeSum1 =
          RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        var RandomFakeSum2 =
          RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        var RandomFakeSum3 =
          RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        var a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        var array = [RandomSum, Random1, Random2, Random3];

        var random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            var Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            var Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            var Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 20) + 5;
        RandomNumber2 = Math.floor(Math.random() * 20) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        var RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }
    } else if (GLOBAL.classone == true) {
      if (GLOBAL.chooseplus == true) {
        RandomNumber1 = Math.floor(Math.random() * 100) + 5;
        RandomNumber2 = Math.floor(Math.random() * 100) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomSum, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 100) + 5;
        RandomNumber2 = Math.floor(Math.random() * 100) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }
    } else if (GLOBAL.classsec == true) {
      if (GLOBAL.chooseplus == true) {
        RandomNumber1 = Math.floor(Math.random() * 300) + 5;
        RandomNumber2 = Math.floor(Math.random() * 300) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomSum, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 300) + 5;
        RandomNumber2 = Math.floor(Math.random() * 300) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }
    } else if (GLOBAL.classthree == true) {
      if (GLOBAL.chooseplus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomSum, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }

      if (GLOBAL.choosemult == true) {
        RandomNumber1 = Math.floor(Math.random() * 18) + 5;
        RandomNumber2 = Math.floor(Math.random() * 18) + 5;
        var RandomMult = RandomNumber1 * RandomNumber2;

        RandomFakeSum1 =
          RandomMult + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomMult + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomMult + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMult, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMult, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomMult];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMult) {
            RandomFakeSum3 =
              RandomMult + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMult, Random1, Random2, Random3];
      } else if (GLOBAL.chooseDL == true) {
        RandomNumber1 = Math.floor(Math.random() * 18) + 5;
        RandomNumber2 = Math.floor(Math.random() * 18) + 5;
        RandomMult = RandomNumber1 * RandomNumber2;

        var RandomDl = RandomMult / RandomNumber2;

        RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomDl + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomDl, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomDl, Random1, Random2, Random3];

        random = [RandomMult, RandomNumber2, RandomDl];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomDl) {
            RandomFakeSum3 =
              RandomDl + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomDl, Random1, Random2, Random3];
      }
    } else if (GLOBAL.classfth == true) {
      if (GLOBAL.chooseplus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomSum, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }

      if (GLOBAL.choosemult == true) {
        RandomNumber1 = Math.floor(Math.random() * 20) + 5;
        RandomNumber2 = Math.floor(Math.random() * 20) + 5;
        RandomMult = RandomNumber1 * RandomNumber2;

        RandomFakeSum1 =
          RandomMult + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomMult + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomMult + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMult, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMult, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomMult];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMult) {
            RandomFakeSum3 =
              RandomMult + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMult, Random1, Random2, Random3];
      } else if (GLOBAL.chooseDL == true) {
        RandomNumber1 = Math.floor(Math.random() * 20) + 5;
        RandomNumber2 = Math.floor(Math.random() * 20) + 5;
        RandomMult = RandomNumber1 * RandomNumber2;

        RandomDl = RandomMult / RandomNumber2;

        RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomDl + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomDl, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomDl, Random1, Random2, Random3];

        random = [RandomMult, RandomNumber2, RandomDl];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomDl) {
            RandomFakeSum3 =
              RandomDl + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomDl, Random1, Random2, Random3];
      }
    } else if (GLOBAL.classfive == true) {
      if (GLOBAL.chooseplus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomSum, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomSum, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomSum];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomSum + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomSum) {
            RandomFakeSum3 =
              RandomSum + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomSum, Random1, Random2, Random3];
      } else if (GLOBAL.chooseminus == true) {
        RandomNumber1 = Math.floor(Math.random() * 500) + 5;
        RandomNumber2 = Math.floor(Math.random() * 500) + 5;
        RandomSum = RandomNumber1 + RandomNumber2;
        RandomMin = RandomSum - RandomNumber2;

        RandomFakeSum1 = RandomSum + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomSum + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomSum + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMin, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMin, Random1, Random2, Random3];

        random = [RandomSum, RandomNumber2, RandomMin];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMin + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMin) {
            RandomFakeSum3 =
              RandomMin + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMin, Random1, Random2, Random3];
      }

      if (GLOBAL.choosemult == true) {
        RandomNumber1 = Math.floor(Math.random() * 30) + 5;
        RandomNumber2 = Math.floor(Math.random() * 30) + 5;
        RandomMult = RandomNumber1 * RandomNumber2;

        RandomFakeSum1 =
          RandomMult + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomMult + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomMult + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomMult, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomMult, Random1, Random2, Random3];

        random = [RandomNumber1, RandomNumber2, RandomMult];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 =
              RandomMult + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomMult) {
            RandomFakeSum3 =
              RandomMult + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomMult, Random1, Random2, Random3];
      } else if (GLOBAL.chooseDL == true) {
        RandomNumber1 = Math.floor(Math.random() * 30) + 5;
        RandomNumber2 = Math.floor(Math.random() * 30) + 5;
        RandomMult = RandomNumber1 * RandomNumber2;

        RandomDl = RandomMult / RandomNumber2;

        RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (-1 - -2) + -2);

        RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (2 - 1) + 1);

        RandomFakeSum3 = RandomDl + Math.floor(Math.random() * (2 - -2) + -2);

        a = [RandomDl, RandomFakeSum1, RandomFakeSum2, RandomFakeSum3];
        array = [RandomDl, Random1, Random2, Random3];

        random = [RandomMult, RandomNumber2, RandomDl];

        for (let i = 0; i < a.length; i++) {
          if (RandomFakeSum3 == RandomFakeSum1) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - -5) + -5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum1 == RandomFakeSum2) {
            RandomFakeSum1 =
              RandomDl + Math.floor(Math.random() * (-1 - 5) + 5);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum2 == RandomFakeSum1) {
            RandomFakeSum1 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random1 = RandomFakeSum1;
          }

          if (RandomFakeSum3 == RandomFakeSum2) {
            RandomFakeSum2 = RandomDl + Math.floor(Math.random() * (5 - 1) + 1);
          } else {
            Random2 = RandomFakeSum2;
          }

          if (RandomFakeSum3 == RandomDl) {
            RandomFakeSum3 =
              RandomDl + Math.floor(Math.random() * (5 - -5) + -5);
          } else {
            Random3 = RandomFakeSum3;
          }
        }

        array = [RandomDl, Random1, Random2, Random3];
      }
    }

    function shuffle(ar) {
      for (let i = ar.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [ar[i], ar[j]] = [ar[j], ar[i]];
      }
    }
    shuffle(array);

    const { count } = this.state;

    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.containerBoxShort}>
            <Button
              underlayColor={'#ffffff'}
              title="Back"
              onPress={() => navigation.navigate('ChMode')}
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
            {this.choose({ navigation })}
          </View>
        </View>

        <View style={styles.TextComponentStyle}>
          <Text style={{ fontSize: 30 }}>Exercise</Text>
        </View>
        <View style={styles.exercise}>
          <Text style={{ fontSize: 30 }}>{primer()}</Text>
        </View>
        <View style={styles.containerBox}>
          <View style={styles.btm}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: '5%',
                top: '30%',
              }}>
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title={array[0]}
                  onPress={() => {
                    if (GLOBAL.countertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                      if (count == GLOBAL.counter) {
                        {
                          GLOBAL.pr = this.state.pr;
                          GLOBAL.z = this.state.z;
                          GLOBAL.trueans = this.state.trueans;
                          navigation.navigate('ResultList');
                        }
                      }
                    } else if (GLOBAL.timertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[0]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                    }
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
                  title={array[1]}
                  onPress={() => {
                    if (GLOBAL.countertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                      if (count == GLOBAL.counter) {
                        {
                          GLOBAL.pr = this.state.pr;
                          GLOBAL.z = this.state.z;
                          GLOBAL.trueans = this.state.trueans;
                          navigation.navigate('ResultList');
                        }
                      }
                    } else if (GLOBAL.timertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[1]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                    }
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
                top: '35%',
              }}>
              <View style={{ width: '48%' }}>
                <Button
                  underlayColor={'#ffffff'}
                  title={array[2]}
                  onPress={() => {
                    if (GLOBAL.countertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                      if (count == GLOBAL.counter) {
                        {
                          GLOBAL.pr = this.state.pr;
                          GLOBAL.z = this.state.z;
                          GLOBAL.trueans = this.state.trueans;
                          navigation.navigate('ResultList');
                        }
                      }
                    } else if (GLOBAL.timertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[2]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                    }
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
                  title={array[3]}
                  onPress={() => {
                    if (GLOBAL.countertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                      if (count == GLOBAL.counter) {
                        {
                          GLOBAL.pr = this.state.pr;
                          GLOBAL.z = this.state.z;
                          GLOBAL.trueans = this.state.trueans;
                          navigation.navigate('ResultList');
                        }
                      }
                    } else if (GLOBAL.timertrue == true) {
                      {
                        if (GLOBAL.chooseplus == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('+');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseminus == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('-');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.choosemult == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('*');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        } else if (GLOBAL.chooseDL == true) {
                          this.state.z.push(array[3]);
                          this.state.pr.push(random[0]);
                          this.state.pr.push('/');
                          this.state.pr.push(random[1]);
                          this.state.pr.push('=');
                          this.state.pr.push(random[2]);
                          this.state.trueans.push(random[2]);
                          this.increment(+1);
                        }
                      }
                    }
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
