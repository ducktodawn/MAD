import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

import { PieChart } from "react-native-chart-kit";
import BottomDrawer from "react-native-bottom-drawer-view";

import StatisticsDrawerHeader from "../components/StatisticsDrawerHeader";

export default function StatisticsPieChartDisplay() {
  const data = [
    {
      name: "Food",
      expenses: 5,
      color: "#ff9f9f",
      legendFontColor: "black",
      legendFontSize: 15,
    },
    {
      name: "Entertainment",
      expenses: 2,
      color: "#f8c9c3",
      legendFontColor: "black",
      legendFontSize: 15,
    },
    {
      name: "Transport",
      expenses: 3,
      color: "#e5b5af",
      legendFontColor: "black",
      legendFontSize: 15,
    },
    {
      name: "Others",
      expenses: 1,
      color: "#ffe7e6",
      legendFontColor: "black",
      legendFontSize: 15,
    },
  ];
  const expenses = [
    { id: "1", title: "Food", cost: "$300" },
    { id: "2", title: "Transport", cost: "$50" },
    { id: "3", title: "Entertainment", cost: "$30" },
  ];
  function Item({ id, title, cost }) {
    if (parseInt(id) == expenses.length) {
      return (
        <View style={styles.expenses2}>
          <Text style={styles.sectionTitles}>{title}</Text>
          <Text style={styles.money}>{cost}</Text>
        </View>
      );
    } else if (id == "1") {
      return (
        <>
          <View style={styles.expenses}>
            <Text style={styles.sectionTitles}>{title}</Text>
            <Text style={styles.money}>{cost}</Text>
          </View>
          <Image source={require("../assets/line.png")} style={styles.line} />
        </>
      );
    } else {
      return (
        <>
          <View style={styles.expenses2}>
            <Text style={styles.sectionTitles}>{title}</Text>
            <Text style={styles.money}>{cost}</Text>
          </View>
          <Image source={require("../assets/line.png")} style={styles.line} />
        </>
      );
    }
  }
  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} cost={item.cost} />
  );
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    barPercentage: 0.5,
  };
  return (
    <View>
      <PieChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        accessor="expenses"
        backgroundColor="transparent"
      />

      <BottomDrawer containerHeight={450} roundedEdges={true}>
        <StatisticsDrawerHeader />
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.goal}>
          <Image
            source={require("../assets/tick.png")}
            style={styles.tick}
            resizeMode="contain"
          />
          <Text style={styles.monthlyGoal}>Monthly goal reached</Text>
        </View>
      </BottomDrawer>
    </View>
  );
}
const styles = StyleSheet.create({
  pieGraphText: {
    color: "#35424a",
    fontSize: 17,
    paddingLeft: 50,
  },
  drawerHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  arrows: {
    width: 25,
    height: 25,
    marginTop: 25,
  },
  drawerTitle: {
    fontSize: 25,
    marginTop: 20,
    color: "#35424a",
  },
  expenses: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 25,
  },
  sectionTitles: {
    fontSize: 15,
    color: "#acacac",
    fontWeight: "bold",
  },
  money: {
    fontSize: 15,
    color: "#989eb1",
  },
  line: {
    height: 3,
    width: 320,
    marginLeft: 50,
    marginTop: 10,
  },
  expenses2: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
  tick: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  monthlyGoal: {
    fontSize: 20,
    color: "#92d36e",
  },
  goal: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15,
  },
});
