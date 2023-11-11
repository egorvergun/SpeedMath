import React, { Component } from 'react';
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
import styles from './Style';
import button from './button';
import navigation from '../App';

module.exports = {
  ar: 1,
  rm: 1,
  z: 1,
  pr: 1,
  count: 1,
  trueans: 1,
  chooseplus: false,
  chooseminus: false,
  choosemult: false,
  chooseDL: false,
  classkg: false,
  classone: false,
  classsec: false,
  classthree: false,
  classfth: false,
  classfive: false,
  counter: null,
  timer: null,
  timertrue: true,
  countertrue: false
};
