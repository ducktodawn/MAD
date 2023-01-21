import { View, Image, Text, TextInput, SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";
export default function EmailAndPassword() {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  return (
    <View>
      <SafeAreaView>
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
        />
      </SafeAreaView>
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
  