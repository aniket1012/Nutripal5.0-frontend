import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView
} from 'react-native'

import {
    connect
} from 'react-redux'

import { updateUser } from '../action'


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)


class Profile extends React.Component {

  state = {
    form: false,
    name: "",
    email: '',
    password: ''
  }

  toggleForm() {
    this.setState({
      form: !this.state.form
    })
  }

   handleChange(text, field) {
      if (field === 'name'){
        this.setState({ name: text})
      }
      else if (field === 'email'){
        this.setState({ email: text})
      }
      else if (field === 'password'){
        this.setState({ password: text})
      }

    }

    handleSubmit() {
      user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
      this.props.updateUser(user, this.props.navigation, this.props.user)
      this.setState({
        name: "",
        email: "",
        password: "",
      })
    }

  

    render() {
      console.log(this.state)
        return (
            <View style={styles.mainContainer}>
              <View style={styles.imgContainer}>
                  <Image style={styles.logo} source={{uri: 'https://cdn3.iconfinder.com/data/icons/outline-style-1/512/profile-512.png'}}/>
                      <Text style={styles.userName}> {this.props.user.name} </Text> 
              </View> 
              {this.state.form ? 
                <DismissKeyboard>
                  <View style={styles.inputContainer}> 
                  <TextInput 
                  // value={this.props.user.name}
                  style={styles.input} 
                  placeholder={this.props.user.name}
                  // returnKeyType="next"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  onChangeText={(text) => this.handleChange(text,'name')}
                  />
                  <TextInput 
                  // value={this.props.user.email}
                  style={styles.input} 
                  placeholder={this.props.user.email}
                  // returnKeyType="next"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  onChangeText={(text) => this.handleChange(text,'email')}
                  />
                  <TextInput 
                  style={styles.input} 
                  placeholder="New PassWord" 
                  // returnKeyType="next" 
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholderTextColor="rgba(255,255,255,0.7)"
                  onChangeText={(text) => this.handleChange(text,'password')}
                  secureTextEntry 
                  />
                  </View>
                </DismissKeyboard>
                : 
                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>
                        Email: {this.props.user.email}
                    </Text>
                    <Text style={styles.infoText}>
                        Total Number of Workouts: {this.props.user.workouts.length}
                    </Text>
                </View>}
              
                {this.state.form ? 
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.userBtn} onPress={() => {this.handleSubmit(); this.toggleForm()}}>
                      <Text style={styles.btnTxt}>Done</Text>
                  </TouchableOpacity>
                </View>  
                : 
                <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.userBtn} onPress={() => this.toggleForm()}>
                      <Text style={styles.btnTxt}>Edit</Text>
                  </TouchableOpacity>
                </View> }
                
                
            </View>
        )
    }
}
//END OF PROFILE 

function mapStateToProps(state) {
    return {
        user: state.user.currentUser,
        

    }
}

export default connect(mapStateToProps, {
  updateUser
})(Profile)




const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  imgContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    width: '100%',
    backgroundColor: '#01579B',
    marginBottom: 5,
    borderRadius: 20,
    shadowOffset: {
            width: 5,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,
  },

  logo: {
    height: 150,
    width: 150,
    borderColor: 'black',
    borderWidth: 0.2,
    borderRadius: 75,
    padding: 5,
    backgroundColor: '#fff',
    
  },

  userName: {
    margin: 5,
    fontSize: 28,
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontWeight: "bold",
    // textDecorationLine: 'underline',
  },

  inputContainer: {
    flex: 2,
    backgroundColor: '#01579B',
    alignItems: 'center',
    // justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    borderRadius: 20,
    shadowOffset: {
            width: 5,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,

    padding: 15,
    marginTop: 5,
  },

  input: {
     height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 25,
    width: '75%',
  },

  infoContainer: {
    flex: 2,
    backgroundColor: '#01579B',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // borderWidth: 2,
    // borderColor: 'blue',
    width: '100%',
    borderRadius: 20,
    shadowOffset: {
            width: 5,
            height: 3
        },
        shadowColor: 'black',
        shadowOpacity: 0.6,

    padding: 15,
    marginTop: 5,
  },

  infoText: {
    fontSize: 18,
    fontFamily: 'Avenir-Medium',
    color: '#fff',
    fontWeight: "500",
    margin: 10
  },

  btnContainer: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      width: "100%",
      margin: 5,
    
    },
  userBtn: { 
      backgroundColor: "#213B53",
      paddingVertical: 15,
      width: "30%",
      marginBottom: 25,
      borderRadius: 35,
      shadowOffset: {
          width: 10,
          height: 5
        },
        shadowColor: 'black',
        shadowOpacity: 0.4,

    },
  btnTxt: {
      fontSize: 20,
      textAlign: "center",
      color: "#fff",
      fontWeight: "700",
      fontFamily: "Avenir-Medium",
      
    },


});


