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
      age: "",
      height: "",
      weight: "",
      gender: "",
      life_style: "",
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
      else if (field === 'age'){
        this.setState({ age: text})
      }
      else if (field === 'height'){
        this.setState({ height: text})
      }
      else if (field === 'weight'){
        this.setState({ weight: text})
      }
      else if (field === 'gender'){
        this.setState({ gender: text})
      }
      else if (field === 'life_style'){
        this.setState({ life_style: text})
      }
    }

    handleSubmit() {
      newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        age: this.state.age,
        height: this.state.height,
        weight: this.state.weight,
        gender: this.state.gender,
        life_style: this.state.life_style
      }
      this.props.createUser(newUser, this.props.navigation)
      this.setState({
        name: "",
        email: "",
        password: "",
        age: "",
        height: "",
        weight: "",
        gender: "",
        life_style: "",
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
                placeholder="UserName"
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
                <TextInput 
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
                />
                <TextInput 
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
                />
            </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.userBtn} onPress={() => this.handleSubmit()}>
                <Text style={styles.btnTxt}>Create Account</Text>
            </TouchableOpacity>
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
    // justifyContent: 'center',
    // alignItems: "center",
  },

  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 20,
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
    width: 190,
    textAlign: "center",
    opacity: 0.9,
    fontSize: 50,
    fontFamily: "Avenir-Medium",
   

  },

   inputContainer: {
       padding: 15,
       marginBottom: 10,
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

  


  
});