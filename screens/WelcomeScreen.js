import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
    KeyboardAvoidingView,
    StatusBar,
    TouchableWithoutFeedback,
    Keyboard,
    TouchableOpacity,
} from 'react-native'


const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

class WelcomScreen extends React.Component {

    render() {
        return (
            <DismissKeyboard>
                <KeyboardAvoidingView behavior="padding" style={styles.container}> 
                    <StatusBar barStyle="light-content"/>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={{uri: 'https://np.technology/img/NP-Small-Square-Trans-White.png'}}/>
                        <Text style={styles.title}>NutriPal</Text> 
                    </View> 

                    <View style={styles.btnContainer}>
                        <TouchableOpacity 
                        style={styles.userBtn} 
                        onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.btnTxt}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.userBtn} 
                        onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={styles.btnTxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View> 
            </KeyboardAvoidingView>
        </DismissKeyboard>
        )
    }
}

export default WelcomScreen

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
    // textAlign: 'center',
    // margin: 10,
    // color: '#fff',
    // fontFamily: "Papyrus",
    
    // fontFamily: ""
  },

 
  logo: {
    width: 150,
    height:150,

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

