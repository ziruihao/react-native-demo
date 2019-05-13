import React from 'react';
// import { StyleSheet } from 'react-native';
import console from 'console';
import MainTabBar from './navigation/new-tab-bar';

console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <MainTabBar />
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
