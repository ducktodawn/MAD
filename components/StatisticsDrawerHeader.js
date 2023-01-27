import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function StatisticsDrawerHeader() {
  return (
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
  );
}
const styles = StyleSheet.create({
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
});
