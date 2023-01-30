import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

import BottomDrawer from "react-native-bottom-drawer-view";
import { LineChart } from "react-native-chart-kit";

import StatisticsDrawerHeader from "./StatisticsDrawerHeader";

export default function StatisticsDisplay() {
  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        data: [3, 1, 5, 4, 4, 3, 2, 3, 2, 4, 4, 5],
        color: (opacity = 1) => `rgba(248,95,106, ${opacity})`,
      },
    ],
  };
  const DATA = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ];
  const renderItem = ({ item }) => <Item id={item.id} />;
  const info = [
    { id: "1", title: "Budget", cost: "$2000" },
    { id: "2", title: "Costs", cost: "$1500" },
    { id: "3", title: "Savings", cost: "$500" },
  ];
  function Item2({ id, title, cost }) {
    if (parseInt(id) == info.length) {
      return (
        <View style={styles.info2}>
          <Text style={styles.sectionTitles}>{title}</Text>
          <Text style={styles.money}>{cost}</Text>
        </View>
      );
    } else if (id == "1") {
      return (
        <>
          <View style={styles.info}>
            <Text style={styles.sectionTitles}>{title}</Text>
            <Text style={styles.money}>{cost}</Text>
          </View>
          <Image source={require("../assets/line.png")} style={styles.line} />
        </>
      );
    } else {
      return (
        <>
          <View style={styles.info2}>
            <Text style={styles.sectionTitles}>{title}</Text>
            <Text style={styles.money}>{cost}</Text>
          </View>
          <Image source={require("../assets/line.png")} style={styles.line} />
        </>
      );
    }
  }
  const renderItem2 = ({ item }) => (
    <Item2 id={item.id} title={item.title} cost={item.cost} />
  );
  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
    barPercentage: 0.5,
  };
  function Item({ id }) {
    return <Text style={styles.others}>{id}</Text>;
  }
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        withShadow={false}
        withInnerLines={false}
        withOuterLines={false}
        withDots={true}
        withHorizontalLabels={false}
        withVerticalLabels={false}
        hidePointsAtIndex={[0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
        horizontal={true}
      />
      <BottomDrawer containerHeight={450} shadow={true} roundedEdges={true}>
        <StatisticsDrawerHeader />
        <FlatList
          data={info}
          renderItem={renderItem2}
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
  container: {
    backgroundColor: "white",
  },
  statistics: {
    fontSize: 25,
    marginLeft: 40,
    fontWeight: "bold",
  },
  others: {
    fontSize: 10,
    paddingLeft: 20,
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 20,
  },
  lineGraphText: {
    color: "#35424a",
    fontSize: 17,
    paddingLeft: 50,
  },
  flatList: {
    marginLeft: 40,
  },
  info: {
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
  info2: {
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
