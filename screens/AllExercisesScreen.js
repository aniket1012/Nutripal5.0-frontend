import React from 'react'

import {View, Text, StyleSheet, Image, ScrollView, Dimensions, Button, TouchableOpacity, TextInput, TouchableWithoutFeedback,
    Keyboard } from 'react-native'

import * as Animatable from 'react-native-animatable'

import ExerciseCard from '../Components/ExerciseCard'

import { connect } from 'react-redux'

import { like, fetchExercises, selectExercise } from '../action'


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


class AllExercisesScreen extends React.Component {


  state = {
    searchTerm: '',
    searchBarFocused: true,
    
    chestFilter: false,
    shouldersFilter: false,
    bicepsFilter: false,
    tricepsFilter:false,
    absFilter: false,
    backFilter: false,
    legsFilter: false,

    exercises: [],
  }
 

  handleChange(text) {
    this.setState({
      searchTerm: text
    })
  }

  toggleFilter(field) {
    if (field === 'chest'){
      this.setState({
        chestFilter: !this.state.chestFilter
      })
    }
    else if (field === 'shoulders'){
      this.setState({
        shouldersFilter: !this.state.shouldersFilter
      })
    }
    else if (field === 'biceps'){
      this.setState({
        bicepsFilter: !this.state.bicepsFilter
      })
    }
    else if (field === 'triceps'){
      this.setState({
        tricepsFilter: !this.state.tricepsFilter
      })
    }
    else if (field === 'abs'){
      this.setState({
        absFilter: !this.state.absFilter
      })
    }
    else if (field === 'back'){
      this.setState({
        backFilter: !this.state.backFilter
      })
    }
    else if (field === 'legs'){
      this.setState({
        legsFilter: !this.state.legsFilter
      })
    }
  }

  resetFilter() {
    this.setState({
      chestFilter: false,
      shouldersFilter: false,
      bicepsFilter: false,
      tricepsFilter: false,
      absFilter: false,
      backFilter: false,
      legsFilter: false,
    })
  }

  applyFilter() {
    if( this.state.chestFilter) {
      return this.props.exercises.filter(exercise => {
      return  exercise.muscle === 'Chest'
      })
    } else if (this.state.shouldersFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Shoulders'
      })
    }
     else if (this.state.bicepsFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Bicep'
      })
    }
     else if (this.state.tricepsFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Triceps'
      })
    }
     else if (this.state.absFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Abdominals'
      })
    }
     else if (this.state.backFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Back'
      })
    }
     else if (this.state.legsFilter) {
      return this.props.exercises.filter(exercise => {
        return exercise.muscle === 'Legs'
      })
    } else {
      return this.props.exercises.filter(exercise => {
        return exercise.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })
    }
  }


  // searchExercises() {
  //   return this.props.exercises.filter(exercise => {
  //     return exercise.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   })
  // }

  componentDidMount(){
    this.props.fetchExercises()
  }


  
  renderExercises() {
    return this.applyFilter().map(exercise => {
      return (
      <ExerciseCard key={exercise.id} exercise={exercise} navigation={this.props.navigation}> 
         <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.selectExercise(exercise,this.props.myExercises)}>
                <Text style={styles.btnTxt}> + </Text>
            </TouchableOpacity>
              <TouchableOpacity style={styles.counterBtn} onPress={() => this.props.navigation.navigate('ExerciseShow', exercise)}>
                <Text style={styles.btnTxt}>Details</Text>
            </TouchableOpacity>
       </ExerciseCard>
      )
    })
  }
  

  render() {
   
      return (
        <DismissKeyboard>
        <View style={styles.mainContainer}>
          <Animatable.View animation= 'slideInRight' duration={500} style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                placeholder = "🔍 Search..."
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor = "grey"
                onChangeText={(text) => this.handleChange(text,'search')}
                />
            </Animatable.View>
            <View style={styles.btnContainer}>
              <Text style={{color: '#fff', fontSize: 10, fontWeight:'800', padding: 5, }}>Filters</Text>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('chest')}
                  >
                    <Text style ={styles.bodyText}>Chest</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('shoulders')}
                  >
                    <Text style ={styles.bodyText}>Shoulders</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('biceps')}
                  >
                    <Text style ={styles.bodyText}>Biceps</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('triceps')}
                  >
                    <Text style ={styles.bodyText}>Triceps</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('abs')}
                  >
                    <Text style ={styles.bodyText}>Abs</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('back')}
                  >
                    <Text style ={styles.bodyText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                  style ={styles.bodyFilter}
                  onPress={() => this.toggleFilter('legs')}
                  >
                    <Text style ={styles.bodyText}>Legs</Text>
                  </TouchableOpacity>
              </View>
              <View style={{alignItems: 'flex-end', marginRight: 10,}}>
                <TouchableOpacity
                style ={styles.resetFilterBtn}
                title="Reset Filter"
                onPress={() => this.resetFilter()}>
                  <Text style={styles.filterTxt}> Reset Filter</Text>
                </TouchableOpacity>
               
              </View>

          
        < ScrollView>
            <View style={styles.cardContainer}>
              {this.renderExercises()}
            </View>
        </ScrollView>
        </View>
        </DismissKeyboard>
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
//   }

// }



export default connect(mapStateToProps, {
  like,
  fetchExercises,
  selectExercise
})(AllExercisesScreen)



const styles = StyleSheet.create({
  mainContainer: {
    shadowOffset: {width: 5, height: 3}, 
    shadowColor: 'black', 
    shadowOpacity: 0.3

  },

  resetFilterBtn: {
    // borderColor: 'black', 
    // borderWidth: 1,
    alignItems: 'center',
    width: 100,
    margin: 7,
    padding: 5,
    borderRadius: 25,
    backgroundColor: '#213B53',
    shadowOffset: {width: 5, height: 3}, 
    shadowColor: 'black', 
    shadowOpacity: 0.3
  },

  filterTxt: {
    color: "#fff",
    fontWeight: "500",
    fontFamily: "Avenir-Medium",
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // backgroundColor: 'rgba(255,255,255,0.2)'
    backgroundColor: '#01579B',
    // flexDirection: 'row',
    // justifyContent: 'space-evenly'
    
  },

  input: {
    // borderRadius: 15,
    textAlign: 'center',
    flex: 1,
    borderWidth: 1,
    borderColor: '#01579B',
    // width: 180,
    // height: 40,
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(255,255,255,0.2)',
    // marginLeft: 15,
    color: "black",
    // padding: 10,
    fontSize: 22,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#01579B'
    
  },

  bodyFilter: {
    // borderWidth: 0.5,
    // borderColor: 'black',
    padding: 2,
    margin: 4,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowOffset: {width: 5, height: 3}, 
    shadowColor: 'black', 
    shadowOpacity: 0.3
  },

  bodyText: {
    color: '#01579B',
    fontWeight: '500',
    fontSize: 14,

  },




  cardContainer: {
    // flex: 1,
    // backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3' : '#fff',
    // backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    // padding: 2,
    // alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  counterBtn: { 
    backgroundColor: "#fff",
    borderRadius: 200,
    padding: 5,
    shadowOffset: {width: 10, height: 5}, 
    shadowColor: 'black', 
    shadowOpacity: 0.4
    // borderWidth: 2,
    // borderColor: 'black',

    

  },

  btnTxt: {
    fontSize: 12,
    // textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    color: 'black',
    // margin: 5,
    
  },
  
});
