// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  DrawerLayoutAndroid,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import BottomDrawer from "react-native-bottom-drawer-view";
import Navigation from "../components/Navigation";

export default function StatisticsScreen({ navigation }) {
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
  const navigationItems = [
    { index: 0, title: "Home", selected: 1 },
    { index: 1, title: "Calendar", selected: 1 },
    { index: 2, title: "Statistics", selected: 0 },
    { index: 3, title: "Transactions", selected: 1 },
  ];
  const drawer = useRef(null);
  function Item({ id }) {
    return (
      <Text
        style={
          styles.others
        }
      >
        {id}
      </Text>
    );
  }
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
          <Navigation
            navigationItems={navigationItems}
            navigation={navigation}
          ></Navigation>
        </View>
      )}
      style={styles.container}
    >
        <View>
      <View>
          <TouchableOpacity
            style={styles.hamburger}
            activeOpacity={0.5}
            onPress={() => drawer.current.openDrawer()}
          >
            <Image source={require("../assets/hamburger.png")} />
          </TouchableOpacity>
          <Text style={styles.statistics}>Statistics</Text>
        </View>
        <View style={[styles.subHeader, styles.container]}>
          <Text style={styles.lineGraphText}>Line Graph</Text>
          <View style={styles.roundedArrows}>
            <TouchableOpacity onPress={() => navigation.navigate("StatisticsPieChart")}>
              <Image
                source={require("../assets/arrowLeft.png")}
                style={styles.leftRoundedArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("StatisticsPieChart")}>
              <Image
                source={require("../assets/arrowRight.png")}
                style={styles.rightRoundedArrow}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
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
        <BottomDrawer containerHeight={253} shadow={true} roundedEdges={true}>
          <View style={styles.drawerHeader}>
            <TouchableOpacity>
              <Image
                source={require("../assets/leftArrow.png")}
                style={styles.arrows}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.drawerTitle}>March</Text>
            <TouchableOpacity
            >
              <Image
                source={require("../assets/rightArrow.png")}
                style={styles.arrows}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  close: {
    marginTop: 50,
    marginLeft: 15,
  },
  closeImage: {
    height: 25,
    width: 25,
  },
  hamburger: {
    height: 30,
    width: 30,
    marginTop: 50,
    marginLeft: 40,
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
  roundedArrows: {
    flexDirection: "row",
    marginRight: 20,
  },
  leftRoundedArrow: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  rightRoundedArrow: {
    width: 25,
    height: 25,
    marginLeft: 5,
  },
  flatList: {
    marginLeft: 40,
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
