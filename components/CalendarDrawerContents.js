import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";

export default function CalendarDrawerContents({
  moneyEarned,
  moneyLost,
  navigation,
  selectedDay
}) {
  const AlertButton = () =>
    Alert.alert("Would you like to add for Expenses or Income?", "", [
      {
        text: "Expenses",
        onPress: () => navigation.navigate("Expenses", { date: selectedDay }),
      },
      {
        text: "Income",
        onPress: () => navigation.navigate("Income", { date: selectedDay }),
      },
    ]);
  return (
    <View>
      <View style={styles.expensesRow}>
        <Text style={styles.expenses}>Expenses</Text>
        <Text style={styles.moneyLost}>${moneyLost}</Text>
      </View>
      <View style={styles.incomeRow}>
        <Text style={styles.income}>Income</Text>
        <Text style={styles.moneyEarned}>${moneyEarned}</Text>
      </View>
      <TouchableOpacity style={styles.plusButton} onPress={AlertButton}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  expensesRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  expenses: {
    color: "#989eb1",
    fontSize: 15,
  },
  moneyLost: {
    color: "#f85f6a",
    fontSize: 15,
  },
  incomeRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  income: {
    color: "#989eb1",
    fontSize: 15,
  },
  moneyEarned: {
    color: "#92d36e",
    fontSize: 15,
  },
  plusButton: {
    backgroundColor: "#f85f6a",
    borderRadius: 100,
    position: "absolute",
    bottom: -50,
    right: 20,
    zIndex: 1,
  },
  plus: {
    fontSize: 30,
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
