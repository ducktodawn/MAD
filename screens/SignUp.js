// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import {
  StyleSheet,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import EmailAndPassword from "../components/EmailAndPassword";

export default function SignUpScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />

      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.text}>Welcome!</Text>

      <EmailAndPassword page="signup" navigation={navigation} />

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
});
