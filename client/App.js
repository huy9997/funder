import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DashboardScreen from './src/screens/DashboardScreen'


export default class App extends React.Component {
  render() {
    return(
      <DashboardScreen/>
    );
  }
}