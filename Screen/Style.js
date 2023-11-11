import * as React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Alert,
  Text,
  ScrollView,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#E4E6F4',
    width: '100%',
    height: '100%',
  },

  exercise: {
    top: '25%',
    fontSize: 60,
    width: '90%',
    left: '5%',
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
  },

  TextComponentStyle: {
    top: '20%',
    width: '90%',
    heidth: 54,
    left: '5%',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '100',
  },

  containerBox: {
    justifyContent: 'space-evenly'
  },

  containerBoxShort: {
    top: 30,
    left: '5%',
    flexDirection: 'row',
  },

  scrollView: {
    backgroundColor: 'white',
    top: '10%',
    width: '90%',
    height: '80%',
    paddingTop: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'white',
  },

  btm: {
    marginVertical: 17,
    height: '10%',
    top: '70%',
  },

  containerbox: {
    flex: 1,
    top: 20,
  },

  picker:{
    top: 230,
    left: '5%',
    width: '100%'
  }
});

export default styles;
