import React from 'react'
import moment from 'moment'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import WorkoutCard from '../Components/WorkoutCard'

import {
    Calendar,
    CalendarList,
    Agenda
} from 'react-native-calendars'

import Icon from '@expo/vector-icons/Ionicons'


import {connect} from 'react-redux'

import { removeWorkout } from '../action'





class HomeScreen extends React.Component {
    

    state = {
        details: false,
        workoutDetails: null
    }

    toggleDetails(workout) {
        this.setState({
            workoutDetails: workout,
        }, () => {
            this.setState({
                details: !this.state.details
            })
        })

    }
    

    renderWorkouts() {
      return  this.props.userWorkouts.map(workout => {
        return (
            <WorkoutCard key={workout.id} workout={workout} navigation={this.props.navigation}>
                <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.removeWorkout(workout,this.props.userWorkouts)}>
                        <Text style={styles.minusBtnTxt}> − </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.counterBtn} onPress={() => this.toggleDetails(workout)} >
                        <Text style={styles.minusBtnTxt}>Details</Text>
                    </TouchableOpacity> 
            </WorkoutCard>
        )
        })
    }

    

    render() {
        console.log(this.state.workoutDetails)

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}> Welcome {this.props.user.name} </Text>
                </View>
                <Text style={styles.workoutlabel}>My Workouts</Text>
                <View style={styles.scrollContainer}>
                    <ScrollView horizontal={true} >
                        {/* <View style={styles.workoutTilesContainer}> */}
                           {this.renderWorkouts()}
                           
                        {/* </View> */}
                    </ScrollView>
                </View>
                {this.state.details?  
                <View style={styles.workoutDetail}>
                    <Text style={styles.workoutDetailTxt}>Name :
                        <Text style={styles.workoutValueTxt}>
                        {this.state.workoutDetails.name}
                        </Text>
                    </Text>
                    <Text style={styles.workoutDetailTxt}>Day :
                        <Text style={styles.workoutValueTxt}>
                            {moment(this.state.workoutDetails.day).format('MMM Do Y')}
                        </Text>
                    </Text>
                    <Text style={styles.workoutDetailTxt}>Exercises :
                        {this.state.workoutDetails.exercises.map(workoutEx => {
                            return <Text key={workoutEx.id} style={styles.workoutValueTxt}> {workoutEx.name}, </Text>
                        })}
                    </Text> 
                </View> 
                :
                <CalendarList 
                style = {
                    {
                        borderWidth: 0.2,
                        borderColor: 'gray',
                        height: 360,
                        // margin: 5,
                        marginTop: 20,
                        
                    }
                }
                theme = {
                    {
                        backgroundColor: '#ffffff',
                        calendarBackground: '#ffffff',
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor:'#01579B', 
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: '#d9e1e8',
                        dotColor: '#00adf5',
                        selectedDotColor: '#ffffff',
                        arrowColor: 'orange',
                        monthTextColor: '#01579B',
                        // indicatorColor: 'blue',
                        textDayFontFamily: 'Avenir-Medium',
                        textMonthFontFamily: 'Avenir-Medium',
                        textDayHeaderFontFamily: 'Avenir-Medium',
                        textDayFontWeight: '300',
                        textMonthFontWeight: 'bold',
                        textDayHeaderFontWeight: '300',
                        textDayFontSize: 16,
                        textMonthFontSize: 16,
                        textDayHeaderFontSize: 16
                    }
                }
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Enable horizontal scrolling, default = false
                pastScrollRange={10}
                futureScrollRange={10}
                scrollEnabled={true}
                showScrollIndicator={true}

                horizontal={true}
                 // Enable paging on horizontal, default = false
                pagingEnabled={true}
                showScrollIndicator= {true}

                />
                // <Agenda/>
                }
            </View>
        )
    }
    
}
// END OF HOME SCREEN 

function mapStateToProps(state) {
    return {
        user: state.user.currentUser,
        userWorkouts: state.user.userWorkouts

    }
}

export default connect(mapStateToProps, {
    removeWorkout
})(HomeScreen)



const styles = StyleSheet.create({
  container: {
    height: '100%',
    // backgroundColor: '#D5E9FF',
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },

  titleContainer: {
    height: '10%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
    // borderColor: 'black',
    
  },

  title: {
    fontSize: 28,
    fontFamily: 'Avenir-Medium',
    color: '#01579B',
    fontWeight: "bold",
    shadowOffset:{width: 10, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.2
    // textDecorationLine: 'underline',
    
  },

  scrollContainer: {
    // width: "100%",
    // flex: 1,
    backgroundColor: '#fff',
    height: '20%',
    padding: 5,
    // borderBottomColor: '#758599',
    // borderBottomWidth: 0.3,
    // marginBottom: 50,
    // borderTopColor: '#758599',
    // borderTopWidth: 0.5,
    // borderBottomWidth: 0.5,
    // borderBottomColor: 'grey',
    // marginBottom: 5,
    
   
  },

  workoutlabel: {
      fontSize: 16,
      padding: 10,
        // justifyContent: 'flex-end',
      textAlign: 'left',
    //   alignContent: 'center',
    //   backgroundColor: '#fff',
      fontFamily: 'Avenir-Medium',
      color: '#01579B',
      margin: 5,
    //   fontWeight: "700",
      textDecorationLine: 'underline',
      shadowOffset:{width: 10, height: 5},
        shadowColor: 'black',
        shadowOpacity: 0.4
      
    //   height: '8%',
  },

  workoutTilesContainer: {
    // flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    padding: 5,
    margin: 5,
    borderWidth: 2,
    borderColor: 'black',
    // backgroundColor: 'red',
    // flex: 1,
    // marginTop: 20,

  },

  counterBtn: { 
    backgroundColor: "#fff",
    marginBottom: 58,
    // textAlign: 'center',
    // alignItems: 'baseline',
    // justifyContent: 'fle',
    // paddingHorizontal: 10,
    // width: "30%",
    // marginBottom: 5,
    borderRadius: 200,
    padding: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 3,

    

  },

  minusBtnTxt: {
    fontSize: 10,
    // textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 1,
    // margin: 5,

   
    
  },

    workoutDetail: {
        borderColor: 'black',
        borderWidth: .3,
        padding: 15,
        margin: 15,
        // margin: 15,
        flexDirection: 'column',
        height: '60%',
        backgroundColor: '#01579B',
        borderRadius: 30,
        shadowOffset: {
                width: 5,
                height: 3
            },
        shadowColor: 'black',
        shadowOpacity: 0.6,
    },
    
    workoutDetailTxt: {
        padding: 5,
        fontSize: 22,
        color: '#fff',
        fontWeight: "700",
        
    },

    workoutValueTxt: {
        fontSize: 16,
        padding: 10,
        color: '#fff',
        fontWeight: "200",
    },
        

    totalworkouts: {

    }
    
  

});
