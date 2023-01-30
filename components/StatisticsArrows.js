import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

export default function StatisticsArrows({ navigatePage, navigation }) {
  return (
    <View style={styles.roundedArrows}>
      <TouchableOpacity onPress={() => navigation.navigate(navigatePage)}>
        <Image
          source={require("../assets/arrowLeft.png")}
          style={styles.leftRoundedArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(navigatePage)}>
        <Image
          source={require("../assets/arrowRight.png")}
          style={styles.rightRoundedArrow}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
