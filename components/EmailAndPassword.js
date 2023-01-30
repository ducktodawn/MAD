import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import SignInSignUpNavigation from "./SignInSignUpNavigation";

import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

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
      // if user does not enter a valid email
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email");
        // if user has not signed up with the email user has input for sign in page
      } else if (error.message === "Firebase: Error (auth/user-not-found).") {
        alert("Email does not have a registered account with our app");
        // if user has entered wrong password for email entered
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        alert("Incorrect password");
        // for all other errors
      } // weak password
      else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        alert("Weak password, minimum 6 characters");
        // for all other errors
      } else {
        alert(error.message);
      }
    }
  };
  const onHandleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Passwords do not match");
      } else if (email !== "" && password !== "" && confirmPassword !== "") {
        let userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCredentials.user) {
          await setDoc(doc(db, "users", userCredentials.user.uid), {});
        }
        navigation.navigate("SignIn");
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-email).") {
        alert("Invalid email");





        
        // weak password
      } else if (
        error.message ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)."
      ) {
        alert("Weak password, minimum 6 characters");
        // for all other errors
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
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
      {page === "signup" && (
        <View>
          <Text style={styles.inputTitle}>Confirm Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(text) => onChangeConfirmPassword(text)}
            value={confirmPassword}
          />
          <TouchableOpacity style={styles.button} onPress={onHandleSignUp}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
      {page === "signin" && (
        <TouchableOpacity style={styles.button} onPress={onHandleSignIn}>
          <Text style={styles.btnText}>Sign in</Text>
        </TouchableOpacity>
      )}
      <SignInSignUpNavigation page={page} navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    borderColor: "#989eb1",
    borderBottomWidth: 1,
    height: 35,
    marginVertical: 15,
    marginHorizontal: 40,
    minWidth: 300,
  },
  inputTitle: {
    color: "#f85f6a",
    marginLeft: 40,
    marginTop: 20,
    fontWeight: "700",
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#f85f6a",
    padding: 15,
    paddingHorizontal: 120,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontWeight: "900",
  },
});
