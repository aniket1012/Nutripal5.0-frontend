import React from 'react';

import { StyleSheet, Text, View, } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator,} from 'react-navigation'

import WelcomeScreen from './screens/WelcomeScreen'
import DashBoardScreen from './screens/DashBoardScreen'

import AllExercisesScreen from './screens/AllExercisesScreen'
import BuildAWorkoutScreen from './screens/BuildAWorkoutScreen'
import ProfileScreen from './screens/ProfileScreen'


import Icon from '@expo/vector-icons/Ionicons'

import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen';

import HomeScreen from './screens/HomeScreen'


class App extends React.Component {

  render() {
    return (
      <AppContainer/>
    );

  }
}
  

export default App




const DashBoardTabNavigator = createBottomTabNavigator({
  Exercises: {screen: AllExercisesScreen},
  BuildAWorkout: {screen: BuildAWorkoutScreen}
}, {
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName
    }
  }
})

const DashBoardStackNavigator = createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigator
}, {
  defaultNavigationOptions:({navigation}) => {
    return {
      headerLeft: (
        <Icon style ={{paddingLeft:10}} name='md-menu' size={30} onPress={() => navigation.openDrawer()} />
       
      )
    }
  }
})


const HomeStackNavigator = createStackNavigator({
  Home: {screen: HomeScreen }
}, {
  defaultNavigationOptions:({navigation}) => {
    return {
      headerLeft: (
        <Icon style ={{paddingLeft:10}} name='md-menu' size={30} onPress={() => navigation.openDrawer()} />
      ),
      headerTitle: "Home"
    }
  }
})

const ProfleStackNavigator = createStackNavigator({
  Profile: {screen: ProfileScreen}
}, {
  defaultNavigationOptions:({navigation}) => {
    return {
      headerLeft: (
        <Icon style ={{paddingLeft:10}} name='md-menu' size={30} onPress={() => navigation.openDrawer()} />
      ),
      headerTitle: "Profile"
    }
  }
})

//DASHBOARD DRAWER NAVIGATION 
const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeStackNavigator},
  Exercises: {screen: DashBoardStackNavigator},
  Profile: {screen: ProfleStackNavigator},
})

//WELCOME SCREEN APP SWITCH NAVIGATOR TO LOGIN AND SIGN UP
const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {screen: WelcomeScreen},
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen},
  DashBoard: {screen: AppDrawerNavigator}, 

})

const AppContainer = createAppContainer(AppSwitchNavigator)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
