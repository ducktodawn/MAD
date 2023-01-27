// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from "react-native";
import StatisticsArrows from "../components/StatisticsArrows";
import StatisticsDisplay from "../components/StatisticsDisplay";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";

export default function StatisticsScreen({ navigation }) {
  const navigationItems = [
    { index: 0, title: "Home", selected: 1 },
    { index: 1, title: "Calendar", selected: 1 },
    { index: 2, title: "Statistics", selected: 0 },
    { index: 3, title: "Transactions", selected: 1 },
  ];
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={200}
      renderNavigationView={() => (
        <Sidebar
          navigation={navigation}
          navigationItems={navigationItems}
          closeDrawer={() => drawer.current.closeDrawer()}
        />
      )}
      style={styles.container}
    >
      <View>
        <View>
          <Hamburger onPress={() => drawer.current.openDrawer()} />
          <Text style={styles.statistics}>Statistics</Text>
        </View>
        <View style={[styles.subHeader, styles.container]}>
          <Text style={styles.lineGraphText}>Line Graph</Text>
          <StatisticsArrows
            navigation={navigation}
            navigatePage="StatisticsPieChart"
          />
        </View>
        <StatisticsDisplay />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
    fontSize: 30,
    marginLeft: 40,
    fontWeight: "500",
    color: "35424a",
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
