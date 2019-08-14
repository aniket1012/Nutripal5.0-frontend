import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'




import { StyleSheet, Text, View, } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator, } from 'react-navigation'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import WelcomeScreen from './screens/WelcomeScreen'
import DashBoardScreen from './screens/DashBoardScreen'

import AllExercisesScreen from './screens/AllExercisesScreen'
import BuildAWorkoutScreen from './screens/BuildAWorkoutScreen'
import ProfileScreen from './screens/ProfileScreen'
import ExerciseShowScreen from './Components/ExerciseShow'


import Icon  from '@expo/vector-icons/Ionicons'


import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen';

import HomeScreen from './screens/HomeScreen'  

const rootReducer = combineReducers({
  user: userReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))



class App extends React.Component {

  

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    
    );

  }
}// END OF APP COMPONENT


export default (App)
// connect(mapStateToProps, mapDispatchToProps)

const AllExercisesSwitch = createSwitchNavigator({
  Exercises: {screen: AllExercisesScreen},
  ExerciseShow: {screen: ExerciseShowScreen}
})

// TAB NAVIGATOR 
const DashBoardTabNavigator = createMaterialBottomTabNavigator({
  Exercises: {screen: AllExercisesSwitch,
  navigationOptions: {
    tabBarIcon: ({tintColor})=> (
       <Icon name='ios-fitness' color={tintColor} size={26}/>
    )
  }
  },
  BuildAWorkout: {screen: BuildAWorkoutScreen,
  navigationOptions: {
    tabBarIcon: ({tintColor})=> (
       <Icon name='ios-create' color={tintColor} size={21}/>
    )
  }
  }
}, {
  barStyle: { backgroundColor: '#263238' },
  activeTintColor: 'orange',
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName,
    }
  } 
})

//DASHBOARD SCREEN
const DashBoardStackNavigator = createStackNavigator({
  DashBoardTabNavigator: DashBoardTabNavigator,

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
