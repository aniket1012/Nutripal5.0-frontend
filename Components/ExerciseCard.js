import React from 'react';
import { StyleSheet, Text, View, Image,  } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { like, selectExercise } from '../action'

class ExericseCard extends React.Component {

/* I WILL NEED TO CREATE A FUNCTION THAT WILL RENDER THIS EXERCISE CARD ON THE BUILD A WORK OUT SOME */

//ON PRESS AT TOUCHABLE COMPONENT TO FIRE OFF FUNCTION ABOVE
    render() {
      
    return (
      
        <View style={styles.card} >
          <View style={styles.titleContainer}>
            <Text style={styles.title}> {this.props.exercise.name} </Text>
          </View>
          <View style={styles.imgContainer}>
            <Image style={styles.exerciseImage} source={{uri: this.props.exercise.tile}} />
          </View>
          <View style={styles.btnContainer}>
            {this.props.children}
            {/* <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.selectExercise(this.props.exercise,this.props.myExercises)}>
                <Text style={styles.btnTxt}> + </Text>
            </TouchableOpacity> */}
            {/* <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow', this.props.exercise)}>
                <Text style={styles.btnTxt}>Details</Text>
            </TouchableOpacity> */}
          </View>
        </View>
        )
    }

}




function mapStateToProps(state) {
  return {
    likes: state.exercise.likes,
    exercises: state.exercise.exercises,
    myExercises: state.exercise.myExercises
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     upcount: () => {
//       dispatch(like())
//     }
//   }
// }



export default connect(mapStateToProps, {
  like,
  selectExercise

})(ExericseCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#243B58',
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '45%',
    // borderColor: 'black',
    // borderWidth: 4,
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    shadowOffset: {width: 5, height: 3}, 
    shadowColor: 'black', 
    shadowOpacity: 0.6, 
    

   

    // height: '30%'
     

  },

  title: {
    fontSize: 18,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    // padding: 5,
    
  },

  exerciseImage: {
      width: 140,
      height: 140,
    //   marginBottom: 10,
      // resizeMode: 'contain',
      // borderWidth: 5,
      // borderColor: 'black',
      borderRadius: 5,
      marginTop: 5,
      marginBottom: 5,
      // justifyContent: 'center',
      // alignContent: 'center',
      // shadowColor: 'black', shadowOffset: {
      //   width: 0,
      //   height: 5
      // },
      // shadowRadius: 5,
      // shadowOpacity: 1.0


  },

  // titleContainer: {

  // },


  // imgContainer: {

  // },



  btnContainer: {
    flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      padding: 2,
    // flexDirection: "row",
    // alignItems: 'center',
    // borderWidth: 5,
    // borderColor: 'black',
    // width: '100%'
    
  },

  
});