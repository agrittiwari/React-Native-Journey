import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './Component/MainComponent'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View >
     
      <Main />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
