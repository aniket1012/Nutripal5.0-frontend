import React from 'react'
import moment from 'moment'


import {View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'

import {connect} from 'react-redux'

class WorkoutCard extends React.Component {

    

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.workoutTitle}> {this.props.workout.name}</Text>
                < Image style = {styles.workoutImage}
                source = {{uri: 'https://d1nhio0ox7pgb.cloudfront.net/_img/m_collection_png/512x512/plain/dumbbell.png'}}
                />
                <Text style={styles.workoutDay}> {moment(this.props.workout.day).format('MMM Do Y')}</Text>
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
    width: '15%',
    // borderWidth: 0.5,
    // borderColor: 'black',
    backgroundColor: '#01579B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowOffset: {width: 5, height: 5}, 
    shadowColor: 'black', 
    shadowOpacity: 0.6, 
  },

  workoutTitle: {
    fontSize: 16,
    marginTop: 55,
    color: 'white',
  },

  workoutImage: {
    width: 55,
    height:45,
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
    backgroundColor: "#fff",
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
    color: "grey",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    // margin: 5,
    
  },


 

});
