import React, {Component} from 'react';
import {Dimensions, View, Text, Image, Platform} from 'react-native';
import {connect} from 'react-redux';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Addexpenes from './Addexpenes';
import Deshboards from './Deshboard';
import Sidedrower from './sideDrower';

const Drawer = createDrawerNavigator();
const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={props => {
        return <Sidedrower {...props} />;
      }}
      overlayColor="transparent"
      drawerStyle={{
        width: width * 0.7,
      }}
      ontentContainerStyle={{flex: 1}}
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        activeBackgroundColor: 'transparent',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
        // swipeEnabled: false,
      }}
      sceneContainerStyle={{backgroundColor: 'transparent'}}
      initialRouteName="First">
      <Drawer.Screen name="First" component={MainScreen} />
    </Drawer.Navigator>
  );
};

const MainStack = createStackNavigator();
const MainScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home" component={Deshboards} />

      <MainStack.Screen name="Addexpenes" component={Addexpenes} />
    </MainStack.Navigator>
  );
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <DrawerScreen />
      </NavigationContainer>
    );
  }
}

export default Navigation;
