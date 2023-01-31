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
import StatisticsBody from "./StatisticsBody";


export default function StatisticsDisplay() {
  return (
    <View>
      <View style={[styles.subHeader, styles.container]}>
        <StatisticsBody />
      </View>
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
  subHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 20,
  },
});
