// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";

import { StyleSheet, Text, View, DrawerLayoutAndroid } from "react-native";

import StatisticsArrows from "../components/StatisticsBody";
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
        <StatisticsDisplay />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  statistics: {
    fontSize: 30,
    marginLeft: 40,
    fontWeight: "500",
    color: "35424a",
  },
});
