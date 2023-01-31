// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { StyleSheet, View } from "react-native";

import BackButton from "../components/BackButton";
import ExpensesAndIncomeInput from "../components/ExpensesAndIncomeInput";

export default function IncomeScreen({ route, navigation }) {
  const DATA = [
    {
      id: "1",
      title: "Allowance",
      image: require("../assets/allowance.png"),
      selectedImage: require("../assets/allowanceRed.png"),
    },
    {
      id: "2",
      title: "Commissions",
      image: require("../assets/commissions.png"),
      selectedImage: require("../assets/commissionsRed.png"),
    },
    {
      id: "3",
      title: "Salary",
      image: require("../assets/salary.png"),
      selectedImage: require("../assets/salaryRed.png"),
    },
    {
      id: "4",
      title: "Tips",
      image: require("../assets/tips.png"),
      selectedImage: require("../assets/tipsRed.png"),
    },
    {
      id: "5",
      title: "Others",
      image: require("../assets/others.png"),
      selectedImage: require("../assets/othersRed.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <ExpensesAndIncomeInput
        route={route}
        DATA={DATA}
        navigation={navigation}
        title={"Income"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
});
