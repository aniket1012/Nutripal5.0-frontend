import React from 'react'

import {View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'

import {connect} from 'react-redux'

class WorkoutCard extends React.Component {

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.workoutTitle}> {this.props.workout.name}</Text>
                < Image style = {styles.workoutImage}
                source = {{uri: 'https://cdn4.iconfinder.com/data/icons/sports-recreation/128/dumbbell-ol-3-512.png'}}
                />
                <Text style={styles.workoutDay}> {this.props.workout.day}</Text>
                <View style={styles.btnContainer}>
                    {this.props.children}    
                </View>                   
            </View>
        )
    }
}
// END OF HOME SCREEN 

function mapStateToProps(state) {
    return {
        user: state.user.currentUser

    }
}

export default connect(mapStateToProps)(WorkoutCard)



const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    flex: 1,
    // height: '25%',
    // backgroundColor: '#fff',
    // flexDirection: 'column',
    width: '15%',
    borderWidth: 0.5,
    // borderColor: 'black',
    backgroundColor: '#243B58',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: {width: 5, height: 3}, 
    shadowColor: 'black', 
    shadowOpacity: 0.6, 
   
    // backgroundColor: 'blue'
  },

  workoutTitle: {
    fontSize: 16,
    marginTop: 55,
    color: 'white',
  },

  workoutImage: {
    width: 80,
    height:50,
  },

  workoutDay: {
    fontSize: 12,
    color: 'white',
    // marginBottom: 1,
    // marginTop: 2,
  },

  btnContainer: {
    flexDirection: 'row',
    // padding: 5,
   
  },

  counterBtn: { 
    backgroundColor: "#263238",
    // margin: 2,
    // textAlign: 'center',
    // alignItems: 'baseline',
    // justifyContent: 'fle',
    // paddingHorizontal: 10,
    // width: "30%",
    marginBottom: 5,
    borderRadius: 200,
    padding: 2,
    borderWidth: 2,
    borderColor: 'black',

    

  },

  minusBtnTxt: {
    fontSize: 10,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    // margin: 5,
    
  },


 

});
