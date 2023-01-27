import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Navigation from "./Navigation";
export default function Sidebar({ navigation, navigationItems, closeDrawer }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.close}
        activeOpacity={0.5}
        onPress={closeDrawer}
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
  );
}
const styles = StyleSheet.create({
  close: {
    marginTop: 50,
    marginLeft: 15,
  },
  closeImage: {
    height: 25,
    width: 25,
  },
});
