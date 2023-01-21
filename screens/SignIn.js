// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput
} from "react-native";
import EmailAndPassword from "../components/EmailAndPassword";
import auth from "@react-native-firebase/auth";
import { signInWithEmailAndPassword } from "@react-native-firebase/auth";




export default function SignInScreen({navigation}) {

  // async function signIn() {
  //   if (value.email === "" || value.password === "") {
  //     setValue({
  //       ...value,
  //       error: "Email and password are mandatory.",
  //     });
  //     return;
  //   }

  //   try {
  //     await signInWithEmailAndPassword(value.email, value.password);

  //     setValue({
  //       ...value,
  //       email: "",
  //       password: "",
  //       error: "",
  //     });
      
  //     navigation.navigate("Home");
  //   } catch (error) {
  //     setValue({
  //       ...value,
  //       error: error.message,
  //     });
    // }
//  }
  
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

<Text style={styles.title}>Sign In</Text>
<Text style={styles.text}>Welcome back!</Text>
      <EmailAndPassword></EmailAndPassword>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")} >
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            <Text>Don't have an Account? </Text>
            <Text style={styles.signup} onPress={() => navigation.navigate("SignUp")} >Sign up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    fontFamily: "Roboto",

  },
  title: {
    fontSize: 30,
    marginLeft: 40,
    fontWeight: "bold",
  },
  text: {
    color: "#989eb1",
    marginLeft: 40,
    marginTop: 10,
    fontWeight: "600",
  },
  errorText: {
    marginHorizontal: "auto"
  },
  image: {
    margin: 50,
    width: "30%",
    height: "10%",
    alignSelf: "center",
  },
  input: {
    borderColor: "#989eb1",
    borderBottomWidth: 1,
    height: 35,
    padding: 10,
    margin: 15,
    marginLeft: 40,
    minWidth: 300,
  },
  inputTitle: {
    color: "#f85f6a",
    marginLeft: 40,
    marginTop: 20,
    fontWeight: "700",
  },
  btnView: {
    marginTop: 20,
    width: "100%",
    height: 60,
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#f85f6a",
    padding: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "900",
  },
  bottom: {
    flexDirection: "column",
    margin: 10,
  },
  bottomText: {
    color: "#989eb1",
    fontWeight: "900",
  },
  signup: {
    color: "#f85f6a",
  },
});
