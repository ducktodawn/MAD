// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from "react-native";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";
import StatisticsArrows from "../components/StatisticsArrows";
import StatisticsPieChartDisplay from "../components/StatisticsPieChartDisplay";
/*Reasons for changes in pie chart
1. Percentage in the legend --> no need to look at two places at once and users can see both the category and percentage at the same place
2. Legend at the right side of the pie chart --> same level of vision and users can have a side by side comparison between the pie chart and legend
*/
export default function StatisticsPieChart({ navigation }) {
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
        <View style={styles.subHeader}>
          <Text style={styles.pieGraphText}>Pie Chart</Text>
          <StatisticsArrows navigation={navigation} navigatePage="Statistics" />
        </View>
<StatisticsPieChartDisplay />
        
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    fontFamily: "Roboto",
  },
  statistics: {
    fontSize: 25,
    marginLeft: 40,
    fontWeight: "bold",
  },
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 20,
  },
  pieGraphText: {
    color: "#35424a",
    fontSize: 17,
    paddingLeft: 50,
  },
});
