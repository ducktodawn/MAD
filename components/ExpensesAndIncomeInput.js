import { useState } from "react";

import { StyleSheet, Text, View, TextInput } from "react-native";

import ExpensesAndIncome from "./ExpensesAndIncome";

export default function ExpensesAndIncomeInput({
  route,
  DATA,
  navigation,
  title,
}) {
  const [value, setValue] = useState("");
  const { date } = route.params;
  return (
    <View>
      <Text style={styles.expensesOrIncome}>{title}</Text>
      {title === "Expenses" && (
        <Text style={styles.amountSpentOrEarned}>Amount Spent</Text>
      )}
      {title === "Income" && (
        <Text style={styles.amountSpentOrEarned}>Amount Earned</Text>
      )}
      <TextInput
        keyboardType="number-pad"
        style={styles.inputLine}
        onChangeText={(text) => setValue(text)}
        value={value} //value of input
      />
      <Text style={styles.typeOfTransaction}>Type of {title}</Text>
      <ExpensesAndIncome
        data={DATA}
        value={value}
        navigation={navigation}
        date={date}
      ></ExpensesAndIncome>
    </View>
  );
}
const styles = StyleSheet.create({
  expensesOrIncome: {
    fontSize: 25,
    color: "#35424a",
    fontFamily: "Roboto",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 45,
  },
  amountSpentOrEarned: {
    fontSize: 17,
    color: "#f85f6a",
    fontFamily: "Roboto",
    paddingTop: 20,
    paddingLeft: 45,
  },
  inputLine: {
    width: 200,
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 2,
    marginLeft: 45,
  },
  typeOfTransaction: {
    fontSize: 17,
    color: "#f85f6a",
    fontFamily: "Roboto",
    paddingTop: 35,
    paddingLeft: 45,
    paddingBottom: 10,
  },
});
