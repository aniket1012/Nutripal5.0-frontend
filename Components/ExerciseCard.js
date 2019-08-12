import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';

import {connect} from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';


class ExericseCard extends React.Component {


    render() {
    return (
        <View style={styles.card}>
            <Image style={styles.exerciseImage} source={{uri: 'https://weighttraining.guide/wp-content/uploads/2016/10/push-up-tall-2.png'}}/>
            <Text style={styles.btnTxt}>PUSH UP </Text>
            <TouchableOpacity style={styles.counterBtn}  onPress={() => this.props.upcount()}>
                <Text style={styles.btnTxt}>Add Exercise +  {this.props.likes}</Text>
            </TouchableOpacity>
        </View>
        )
    }

}




function mapStateToProps(state) {
  return {
    likes: state.user.likes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    upcount: () => {
      dispatch({type:"LIKE"})}
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ExericseCard)

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#EF6C00',
    // flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 50,
    padding: 15,
    // height: '30%'
     

  },

  exerciseImage: {
      width: 150,
      height: 150,
    //   marginBottom: 10,
      resizeMode: 'contain',
      borderWidth: 5,
      borderColor: 'black',
      borderRadius: 25,
    //   marginLeft: 10,


  },

  counterBtn: { 
    backgroundColor: "#263238",
    // paddingVertical: 10,
    // width: "50%",
    // marginBottom: 10,
    borderRadius: 250,
    padding: 5,

  },

  btnTxt: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    padding: 5,
    
  },
});