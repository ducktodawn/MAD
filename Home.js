// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useRef } from "react";

import {
  View,
  StyleSheet,
  DrawerLayoutAndroid,
} from "react-native";

import HomeDisplay from "../components/HomeDisplay"
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";

const navigationItems = [
  { index: 0, title: "Home", selected: 0 },
  { index: 1, title: "Calendar", selected: 1 },
  { index: 2, title: "Statistics", selected: 1 },
  { index: 3, title: "Transactions", selected: 1 },
];

export default function HomeScreen({ navigation }) {

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
    >
      <View style={styles.container}>
        <Hamburger onPress={() => drawer.current.openDrawer()} />
       <HomeDisplay />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "flex-start",
    fontFamily: "Roboto",
  },
});
