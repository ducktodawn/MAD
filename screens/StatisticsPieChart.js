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
import { PieChart } from "react-native-chart-kit";
import BottomDrawer from "react-native-bottom-drawer-view";
import Navigation from "../components/Navigation";
import StatisticsArrows from "../components/StatisticsArrows";
/*Reasons for changes in pie chart
1. Percentage in the legend --> no need to look at two places at once and users can see both the category and percentage at the same place
2. Legend at the right side of the pie chart --> same level of vision and users can have a side by side comparison between the pie chart and legend
*/
export default function StatisticsPieChart({ navigation }) {
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
  const navigationItems = [
    { index: 0, title: "Home", selected: 1 },
    { index: 1, title: "Calendar", selected: 1 },
    { index: 2, title: "Statistics", selected: 0 },
    { index: 3, title: "Transactions", selected: 1 },
  ];
  const drawer = useRef(null);
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
        <View style={styles.subHeader}>
          <Text style={styles.pieGraphText}>Pie Chart</Text>
          <StatisticsArrows navigation={navigation} navigatePage="Statistics" />
        </View>

        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="expenses"
          backgroundColor="transparent"
        />

        <BottomDrawer containerHeight={253} roundedEdges={true}>
          <View style={styles.drawerHeader}>
            <TouchableOpacity>
              <Image
                source={require("../assets/leftArrow.png")}
                style={styles.arrows}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.drawerTitle}>March</Text>
            <TouchableOpacity>
              <Image
                source={require("../assets/rightArrow.png")}
                style={styles.arrows}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
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
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
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
