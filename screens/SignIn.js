// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import EmailAndPassword from "../components/EmailAndPassword";

export default function SignInScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.text}>Welcome back!</Text>

      <EmailAndPassword page="signin" navigation={navigation} />

      <View style={styles.btnView}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}>
            <Text>Don't have an Account? </Text>
            <Text
              style={styles.signup}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  btnView: {
    marginTop: 20,
    width: "100%",
    height: 60,
    alignItems: "center",
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
