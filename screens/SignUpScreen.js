import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Button,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    StatusBar,
    Picker,

} from 'react-native'

import {connect} from 'react-redux'

import { createUser } from '../action'



const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class SignUpScreen extends React.Component {

 
    state = {
      name: "",
      email: "",
      password: "",
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
      newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }
      this.props.createUser(newUser, this.props.navigation)
      this.setState({
        name: "",
        email: "",
        password: "",
      })
    }

     static navigationOptions = {
        title: "Sign Up"
    }


    render() {
      console.log(this.state)
        return (
    
        <DismissKeyboard>
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
        {/* <StatusBar barStyle="light-content"/> */}
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
                <Text style={styles.title}>NutriPal</Text> 
            </View>
            <View style={styles.inputContainer}> 
                <TextInput 
                style={styles.input} 
                placeholder="Name"
                returnKeyType="next"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'name')}
                />
                <TextInput 
                style={styles.input} 
                placeholder="Email"
                returnKeyType="next"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'email')}
                />
                <TextInput 
                style={styles.input} 
                placeholder="PassWord" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'password')}
                secureTextEntry 
                />
                {/* <TextInput 
                style={styles.input} 
                placeholder="Age" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'age')}
                />
                <TextInput 
                style={styles.input} 
                placeholder="Height (inches)" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'height')}
                />
                <TextInput 
                style={styles.input} 
                placeholder="Weight (lbs)" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'weight')}
                /> */}
                {/* <Picker
                selectedValue={this.state.gender}
                style={styles.pickerGender}
                onValueChange={(text) => this.handleChange(text, 'gender')}>
                  <Picker.Item label= 'Select Gender -' value=''/>
                  <Picker.Item label= 'Male' value='male'/>
                  <Picker.Item label= 'Female' value='female'/>
                </Picker> */}
                {/* <Picker
                selectedValue={this.state.gender}
                style={styles.pickerGender}
                onValueChange={(text) => this.handleChange(text, 'gender')}>
                  <Picker.Item label= 'Life Style -' value=''/>
                  <Picker.Item label= 'Sedentary' value='sedentary'/>
                  <Picker.Item label= 'Lightly Active' value='light'/>
                  <Picker.Item label= 'Active' value='active'/>
                  <Picker.Item label= 'Very Active' value='highly'/>
                </Picker> */}
                {/* <TextInput 
                style={styles.input} 
                placeholder="Gender" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'gender')} 
                />
                <TextInput 
                style={styles.input} 
                placeholder="Life Style" 
                returnKeyType="next" 
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor="rgba(255,255,255,0.7)"
                onChangeText={(text) => this.handleChange(text,'life_style')}
                /> */}
              <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.userBtn} onPress={() => this.handleSubmit()}>
                      <Text style={styles.btnTxt}>Create Account</Text>
                  </TouchableOpacity>
              </View> 
            </View>
      </KeyboardAvoidingView>
      </DismissKeyboard>
      
        )
    }
}
//END OF SIGN UP SCREEN 

function mapStateToProps(state) {
  return {
    user: state.user.currentUser

  }
}


export default connect(mapStateToProps, {
createUser
})(SignUpScreen)




const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2F5476",
    flex: 1,
    // padding: 50,
    justifyContent: 'space-between',
    // alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    // flex: 1,
    justifyContent: "center",
    marginTop: 120,
    // textAlign: 'center',
    // margin: 10,
    // color: '#fff',
    // fontFamily: "Papyrus",
    
    // fontFamily: ""
  },

 
  logo: {
    width: 100,
    height:100,

  },

  title: {
    color: "#fff",
    marginTop: 10,
    // width: 190,
    textAlign: "center",
    opacity: 0.9,
    fontSize: 50,
    fontFamily: "Avenir-Medium",
   

  },

   inputContainer: {
       padding: 10,
       marginBottom: 10,
       marginTop: 50,
       
   },


  input: {
    // width: "90%",
    // backgroundColor: '#fff',
    // padding: 10,
    // borderColor: "black",
    // marginBottom: 10,

    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 15,
    color: "#fff",
    paddingHorizontal: 10,
    borderRadius: 25,


  },

  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
   
  },

  userBtn: { 
    backgroundColor: "#213B53",
    paddingVertical: 15,
    width: "45%",
    marginBottom: 25,
    borderRadius: 30,

  },

  btnTxt: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    fontFamily: "Avenir-Medium",
    
  },

  pickerGender: {
    // position: 'relative',
    // bottom: 0,
    // right: 0,
    // left: 0,

    // height: 150,
    // width: 350,
    borderWidth: 2,
    // flex:1,
    backgroundColor: '#fff',
    padding: 0,
  }
  


  
});