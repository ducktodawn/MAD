import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Hamburger(props) {
  return (
    <TouchableOpacity
      style={styles.hamburger}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Image source={require("../assets/hamburger.png")} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  hamburger: {
    marginTop: 50,
    marginBottom: 35,
    marginLeft: 30,
    width: "6%",
    height: "3%",
  },
});
