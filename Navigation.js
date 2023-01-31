import {
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
} from "react-native";
const navImages = [
  [
    require("../assets/homeRed.png"),
    require("../assets/calendarRed.jpg"),
    require("../assets/statisticsRed.jpg"),
    require("../assets/transactionsRed.jpg"),
  ],
  [
    require("../assets/home.jpg"),
    require("../assets/calendar.png"),
    require("../assets/statistics.png"),
    require("../assets/transactions.png"),
  ],
];
const arrows = [
  require("../assets/redArrow.png"),
  require("../assets/greyArrow2.png"),
];

const NavItem = ({ title, index, selected, navigation }) => (
  <View style={[selected === 0 ? styles.navColor : null, styles.listItem]}>
    <TouchableOpacity onPress={() => navigation.navigate(title)}>
      <Text style={styles.navItemText}>
        <Image source={navImages[selected][index]} style={styles.icons} />
        {"     "}
        <View style={styles.itemText}>
          <Text>{title}</Text>
        </View>
        <Image
          source={arrows[selected]}
          style={[styles.icons, styles.arrows]}
        />
      </Text>
    </TouchableOpacity>
  </View>
);

// reusable in home, statistics, calendar and transactions page
export default function Navigation({ navigationItems, navigation }) {
  return (
    <FlatList
      data={navigationItems}
      renderItem={({ item }) => (
        <View>
          <NavItem
            title={item.title}
            index={item.index}
            selected={item.selected}
            navigation={navigation}
          />
        </View>
      )}
      keyExtractor={(item) => item.index.toString()}
      style={styles.selectionList}
    />
  );
}
const styles = StyleSheet.create({
  listItem: {
    alignItems: "flex-start",
  },
  itemText: {
    width: 100,
  },
  arrows: {
    alignSelf: "flex-end",
  },
  selectionList: {
    marginTop: 30,
  },
  navColor: {
    backgroundColor: "rgba(248, 95, 106, 0.1)",
  },
  navItemText: {
    fontSize: 20,
    marginLeft: 20,
    marginVertical: 10,
  },
  icons: {
    height: 17,
    width: 17,
  },
});
