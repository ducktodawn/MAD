// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  DrawerLayoutAndroid,
} from "react-native";

import { ProgressChart } from "react-native-chart-kit";
import Navigation from "../components/Navigation";

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

const images = [
  require("../assets/food.png"),
  require("../assets/transport.png"),
  require("../assets/others.png"),
];
const navigationItems = [
  { index: 0, title: "Home", selected: 0 },
  { index: 1, title: "Calendar", selected: 1 },
  { index: 2, title: "Statistics", selected: 1 },
  { index: 3, title: "Transactions", selected: 1 },
];
const renderItem = ({ item }) => (
  <View>
    <Item title={item.title} amount={item.amount} index={item.index} />
  </View>
);

export default function HomeScreen({navigation}) {
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

  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      renderNavigationView={() => (
        <View>
          <TouchableOpacity
            style={styles.close}
            activeOpacity={0.5}
            onPress={() => drawer.current.closeDrawer()}
          >
            <Image
              source={require("../assets/closeButton.png")}
              style={styles.closeImage}
            />
          </TouchableOpacity>
          <Navigation navigationItems={navigationItems} navigation={navigation}></Navigation>
        </View>
      )}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.hamburger}
          activeOpacity={0.5}
          onPress={() => drawer.current.openDrawer()}
        >
          <Image source={require("../assets/hamburger.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.text}>Welcome back!</Text>
        <View style={styles.SeparatorLine} />
        <Text style={styles.todaySpendings}>Today's Spendings</Text>

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
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    fontFamily: "Roboto",
  },
  close: {
    marginTop: 50,
    marginLeft: 15,
  },
  closeImage: {
    height: 25,
    width: 25,
  },
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
  hamburger: {
    marginTop: 50,
    marginBottom: 25,
    marginLeft: 30,
    width: "6%",
    height: "3%",
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
  money: {
    position: "absolute",
    top: "22%",
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
