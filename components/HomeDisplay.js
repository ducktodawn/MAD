import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  View,
} from "react-native";

import { ProgressChart } from "react-native-chart-kit";

import HomeText from "./HomeText";

const screenWidth = Dimensions.get("window").width;

const Item = ({ title, amount, index }) => (
  <View style={styles.entireItem}>
    <View style={styles.SeparatorLine} />
    <View style={styles.item}>
      <View style={styles.left}>
        <Text style={styles.color}>
          <Image source={images[index]} style={styles.icons} />
          {"  "}
          {title}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.color}>{amount}</Text>
      </View>
    </View>
  </View>
);
const renderItem = ({ item }) => (
  <View>
    <Item title={item.title} amount={item.amount} index={item.index} />
  </View>
);

const images = [
  require("../assets/food.png"),
  require("../assets/transport.png"),
  require("../assets/others.png"),
];
export default function HomeDisplay() {
  const data = {
    data: [0.4],
  };
  const list = [
    {
      id: 1,
      title: "Food",
      amount: "$6",
      index: 0,
    },
    {
      id: 2,
      title: "Transport",
      amount: "$2",
      index: 1,
    },
    {
      id: 3,
      title: "Others",
      amount: "$3",
      index: 2,
    },
  ];
  return (
    <View>
      <HomeText />
      <ProgressChart
        data={data}
        width={screenWidth - 15}
        height={150}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(248, 95, 106, ${opacity})`,
        }}
        hideLegend={true}
        radius={55}
        style={styles.chart}
      />
      <View style={styles.money}>
        <Text style={styles.value}>$11</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.percentage}>
          You spent {data.data * 100}% of your recommended budget
        </Text>
      </View>
      <SafeAreaView style={styles.spendingList}>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  SeparatorLine: {
    borderBottomColor: "rgba(222, 226, 230, 0.5)",
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomWidth: 2,
    alignSelf: "stretch",
  },
  money: {
    position: "absolute",
    top: "10%",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  chart: {
    marginLeft: 7,
    alignItems: "center",
  },
  value: {
    color: "#f85f6a",
    fontWeight: "700",
    fontSize: 25,
  },
  box: {
    width: "80%",
    padding: 15,
    marginTop: 25,
    alignSelf: "center",
    backgroundColor: "rgba(222, 226, 230, 0.25)",
  },
  percentage: {
    color: "#92d36e",
    alignSelf: "center",
    fontSize: 24,
  },
  spendingList: {
    marginTop: 50,
  },
  icons: {
    height: 17,
    width: 17,
  },
  entireItem: {
    marginVertical: 5,
  },
  item: {
    flexDirection: "row",
    alignSelf: "center",
  },
  left: {
    alignSelf: "flex-start",
    width: "50%",
    marginLeft: 95,
    marginVertical: 5,
  },
  right: {
    width: "40%",
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  color: {
    color: "#989eb1",
    fontWeight: "600",
  },
});
