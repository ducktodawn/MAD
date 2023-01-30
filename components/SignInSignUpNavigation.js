import { StyleSheet, Text, View } from "react-native";

export default function SignInSignUpNavigation({ page, navigation }) {
  return (
    <View style={styles.bottom}>
      {page === "signin" && (
        <View>
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
      )}
      {page === "signup" && (
        <View>
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
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  bottom: {
    marginTop: 20,
    width: "100%",
    height: 60,
    alignItems: "center",
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
