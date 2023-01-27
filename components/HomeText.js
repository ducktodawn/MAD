import { Text, View, StyleSheet } from "react-native";
export default function HomeText() {
  return (
    <View>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>Welcome back!</Text>
      <View style={styles.SeparatorLine} />
      <Text style={styles.todaySpendings}>Today's Spendings</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    marginLeft: 40,
    fontWeight: "500",
    color: "35424a",
  },
  text: {
    marginLeft: 40,
    marginTop: 10,
    fontWeight: "400",
    color: "#35424a",
  },
  SeparatorLine: {
    borderBottomColor: "rgba(222, 226, 230, 0.5)",
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomWidth: 2,
    alignSelf: "stretch",
  },
  todaySpendings: {
    color: "#989eb1",
    fontWeight: "600",
    alignSelf: "center",
  },
});
