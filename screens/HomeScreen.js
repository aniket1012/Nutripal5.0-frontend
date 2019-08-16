import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import WorkoutCard from '../Components/WorkoutCard'


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
                            {this.state.workoutDetails.day}
                        </Text>
                    </Text>
                    <Text style={styles.workoutDetailTxt}>Exercises :
                        {this.state.workoutDetails.exercises.map(workoutEx => {
                            return <Text key={workoutEx.id} style={styles.workoutValueTxt}> {workoutEx.name} </Text>
                        })}
                    </Text> 
                </View> : null
                }
            </View>
        )
    }
    workoutValuelTxt
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
    backgroundColor: 'orange',
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
  },

  titleContainer: {
    height: '10%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
    
  },

  title: {
    fontSize: 38,
  },

  scrollContainer: {
    // width: "100%",
    // flex: 1,
    backgroundColor: '#455A64',
    height: '20%',
    padding: 5,
  },

  workoutlabel: {
      fontSize: 28,
      padding: 5,
      textAlign: 'center',
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
    backgroundColor: "#263238",
    marginBottom: 30,
    // textAlign: 'center',
    // alignItems: 'baseline',
    // justifyContent: 'fle',
    // paddingHorizontal: 10,
    // width: "30%",
    // marginBottom: 5,
    borderRadius: 200,
    padding: 5,
    borderWidth: 2,
    borderColor: 'black',
    margin: 5,

    

  },

  minusBtnTxt: {
    fontSize: 10,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 2,
    // margin: 5,

   
    
  },

    workoutDetail: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 15,
        margin: 15,
        flexDirection: 'column',
    },
    
    workoutDetailTxt: {
        padding: 5,
        fontSize: 22,
    },

    workoutValueTxt: {
        fontSize: 16,
        padding: 10,
    }
        

    
  

});
