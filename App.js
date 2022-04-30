import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import store from './src/Redux/Store';
import {Provider} from 'react-redux';
import Navigation from './src/Navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
