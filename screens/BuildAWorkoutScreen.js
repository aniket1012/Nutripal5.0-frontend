import React from 'react'

import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'

import { connect } from 'react-redux'
import ExerciseCard from '../Components/ExerciseCard';

class BuildAWorkoutScreen extends React.Component {

    renderMyExercises() {
      return this.props.myExercises.map(exercise => {
       return <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}/>
      })
    }


  

    render() {
        return (
        <View>
          <View style={styles.scrollContainer}>
            <ScrollView> 
              <View style={styles.cardContainer}>
                {this.renderMyExercises()}
              </View>
            </ScrollView>
          </View>
          <View style={styles.inputContainer}> 
            <TextInput 
                  style={styles.input} 
                  placeholder="Name Your Workout"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
            />
            <TextInput 
                  style={styles.input} 
                  placeholder="Day"
                  returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
            />
            <TouchableOpacity style={styles.sbmtBtn} onPress={() => alert("Login Works")} onPress={() => this.props.navigation.navigate('DashBoard')}>
                <Text style={styles.btnTxt}>Create Workout</Text>
            </TouchableOpacity>
          </View>
        </View>

        )
    }
}

  
 function mapStateToProps(state) {
   return {
     myExercises: state.user.myExercises
   }
 }

 // function mapDispatchToProps(dispatch) {
 //   return {
 //     upcount: () => {
 //       dispatch(like())
 //   }

 // }
      

export default connect(mapStateToProps)(BuildAWorkoutScreen)




const styles = StyleSheet.create({
  
  cardContainer: {
    // flex: 1,
    backgroundColor: '#37474F',
    flexDirection: 'row',
    width: '100%',
    // height: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  scrollContainer: {
    backgroundColor: '#37474F',
    height: '77%'
  },

  inputContainer: {
    backgroundColor: 'orange',
    padding: 10,
    flexDirection: 'column',
    justifyContent:'flex-end',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },

  input: {
    width: "50%",
    // backgroundColor: '#fff',
    padding: 10,
    margin: 5,
    // borderColor: "black",
    // marginRight: 1,
    // height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    // marginHorizontal: 10,
    color: "#fff",
    
  
    borderRadius: 20,
    


  },
    


  sbmtBtn: { 
    backgroundColor: "#263238",
    // paddingVertical: 10,
    width: "50%",
    // marginBottom: 15,
    borderRadius: 30,
    padding: 10,
    margin: 5,
    

  },

  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    
  },
 

});
