import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function EmailAndPassword({ page, navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [confirmPassword, onChangeConfirmPassword] = useState("");
  const onHandleSignIn = async () => {
    try {
      if (email !== "" && password != "") {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("Home");
      } else {
        alert("Both fields are required");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email");
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        alert("Email does not have a registered account with our app");
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        alert("Incorrect password");
      }
      console.log(error.message);
    }
  };
  const onHandleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else if (email !== "" && password !== "" && confirmPassword !== "") {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("SignIn");
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email");
      }
      console.log(error.message);
    }
  };

  return (
    <View>
      <SafeAreaView>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          keyboardType="email-address"
          value={email}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />
      </SafeAreaView>
      {page === "signup" && (
        <View>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => onChangeConfirmPassword(text)}
            value={confirmPassword}
          />
        </View>
      )}

      {page === "signin" && (
        <TouchableOpacity style={styles.button} onPress={onHandleSignIn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      )}

      {page === "signup" && (
        <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
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
});
