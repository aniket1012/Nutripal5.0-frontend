import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import ExerciseReducer from './reducers/exercsieReducer'
import UserReducer from './reducers/userReducer'




import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image, } from 'react-native';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, createStackNavigator, DrawerItems } from 'react-navigation'
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
  exercise: ExerciseReducer,
  user: UserReducer
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
  barStyle: {
    backgroundColor: '#243B58',
    borderTopWidth: 0,
    shadowOffset: {
      width: 5,
      height: 3
    },
    shadowColor: 'black',
    shadowOpacity: 0.6
  },
  activeTintColor: '#40C4FF',
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
      headerRight: (
        <Icon style ={{paddingRight:10}} name='md-exit' size={30} onPress={() => navigation.navigate('Welcome')} />
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
      headerRight: (
        <Icon style ={{paddingRight:10}} name='md-exit' size={30} onPress={() => navigation.navigate('Welcome')} />
      ),
      headerTitle: "Profile"
    }
  }
})


const customDrawerComponent = (props) => (
  <View style={{flex:1}}>
    <View style={{height: 250, backgroundColor: '#01579B', alignItems:'center', justifyContent: 'center', flex:1}}>
      <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
    </View>
    <ScrollView style={{backgroundColor: '#01579B', color: '#fff'}}>
      <DrawerItems {...props} />
    </ScrollView>
  </View>

)

//DASHBOARD DRAWER NAVIGATION 
const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: HomeStackNavigator},
  Exercises: {screen: DashBoardStackNavigator},
  Profile: {screen: ProfleStackNavigator},
},{
  contentComponent: customDrawerComponent,
  contentOptions: {
    activeTintColor: '#fff'
  }
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

  logo: {
    width: 100,
    height: 100,

  },
});
