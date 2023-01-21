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
  TextInput,
} from "react-native";
import EmailAndPassword from "../components/EmailAndPassword";
export default function SignUpScreen({ navigation }) {
  // const [email, onChangeEmail] = useState(null);
  // const [password, onChangePassword] = useState(null);
  const [confirmPassword, onChangeConfirmPassword] = useState(null);
  // const checkIfPasswordsMatch = () => {
  //   if (email === "" || email === null) {
  //     alert("Please enter email");
  //   } else if (password === "" || password === null) {
  //     alert("Please enter password");
  //   } else if (password === confirmPassword) {
  //     alert("Account created successfully");
  //   } else {
  //     alert("Passwords do not match");
  //   }
  // };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.text}>Welcome!</Text>
      <EmailAndPassword></EmailAndPassword>
      <Text style={styles.inputTitle}>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
      />
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            <Text>Have an Account? </Text>
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("SignIn")}
            >
              Sign In
            </Text>
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
