import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Header from './src/components/Header.js'
import AlbumList from './src/components/AlbumList.js'

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default App;