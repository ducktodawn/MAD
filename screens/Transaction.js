// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  FlatList,
  DrawerLayoutAndroid,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";

const images = [
  require("../assets/shopping2.png"),
  require("../assets/tips2.png"),
  require("../assets/transport2.png"),
  require("../assets/entertainment2.png"),
];
const navigationItems = [
  { index: 0, title: "Home", selected: 1 },
  { index: 1, title: "Calendar", selected: 1 },
  { index: 2, title: "Statistics", selected: 1 },
  { index: 3, title: "Transactions", selected: 0 },
];
export default function TransactionsScreen({ navigation }) {
  const [selected, setSelected] = useState("Month");
  const selectionOptions = [
    { key: 1, value: "Day" },
    { key: 2, value: "Month" },
    { key: 3, value: "Year" },
  ];
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      amount={item.amount}
      category={item.category}
      index={item.index}
      type={item.type}
      year={item.year}
      month={item.month}
      day={item.day}
    />
  );
  const Item = ({ title, amount, category, index, type, year, month, day }) => (
    // for Month option, all transactions which occurred in the same month (eg january) will appear
    // for year option, all transactions which occurred in the same year (eg 2023) will appear
    // for day option, all transactions which occurred in the same day will appear
    <View
      style={
        (selected === "Month" && year === 0 && month === 0) ||
        (selected === "Year" && year === 0) ||
        (selected === "Day" && day === 0 && month === 0 && year === 0)
          ? styles.entireItem
          : styles.hide
      }
    >
      <View style={styles.item}>
        <View style={styles.left}>
          <Text style={styles.date}>{title}</Text>
        </View>
        <View style={styles.right}>
          <Text style={type === "gain" ? styles.color1 : styles.color2}>
            {amount}
          </Text>
        </View>
      </View>
      <View style={styles.item}>
        <View style={[styles.left]}>
          <Text style={[styles.color, styles.category]}>
            <Image source={images[index]} style={styles.icons} /> {category}
          </Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.details}>Merchant Details{">"}</Text>
        </View>
      </View>
    </View>
  );
  const todaysDate = new Date();
  const DATA = [
    {
      id: 1,
      title: "3/2/2023",
      amount: "$15.30",
      category: "Shopping",
      index: 0,
      type: "loss",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 1,
      day: todaysDate.getDate() - 3,
    },
    {
      id: 2,
      title: "1/2/2023",
      amount: "$2.42",
      category: "tips",
      index: 1,
      type: "gain",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() -1,
      day: todaysDate.getDate() - 1,
    },
    {
      id: 3,
      title: "7/1/2023",
      amount: "$8.00",
      category: "Shopping",
      index: 0,
      type: "loss",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 0,
      day: todaysDate.getDate() - 7,
    },
    {
      id: 4,
      title: "6/1/2023",
      amount: "$2.00",
      category: "Transport",
      index: 2,
      type: "loss",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 0,
      day: todaysDate.getDate() - 6,
    },
    {
      id: 5,
      title: "4/1/2023",
      amount: "$106.99",
      category: "Entertainment",
      index: 3,
      type: "loss",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 0,
      day: todaysDate.getDate() - 4,
    },
    {
      id: 6,
      title: "2/1/2023",
      amount: "$1.26",
      category: "Transport",
      index: 2,
      type: "loss",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 0,
      day: todaysDate.getDate() - 2,
    },
    {
      id: 7,
      title: "1/1/2023",
      amount: "$5.00",
      category: "tips",
      index: 1,
      type: "gain",
      year: todaysDate.getFullYear() - 2023,
      month: todaysDate.getMonth() - 0,
      day: todaysDate.getDate() - 1,
    },
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
  >
      <View style={styles.container}>
      <Hamburger onPress={() => drawer.current.openDrawer()} />

        <Text style={styles.title}>Transactions</Text>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={selectionOptions}
          save="value"
          search={false}
          placeholder={"Month"}
          defaultOption={"Month"}
          boxStyles={styles.selectList}
          inputStyles={{ color: "white" }}
          dropdownStyles={{ height: 140, marginLeft: 30 }}
          arrowicon={
            <Image
              source={require("../assets/arrow.png")}
              style={styles.arrow}
            />
          }
        />
        <SafeAreaView style={styles.flatlist}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
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
  title: {
    fontSize: 25,
    marginLeft: 40,
    fontWeight: "500",
    color: "#35424a",
  },
  hamburger: {
    marginTop: 50,
    marginBottom: 30,
    marginLeft: 30,
    width: "4%",
    height: "2%",
  },
  dropdown: {
    width: "30%",
  },
  selectList: {
    marginLeft: 40,
    marginVertical: 10,
    backgroundColor: "#f85f6a",
  },
  arrow: {
    height: 18,
    width: 18,
  },
  flatlist: {
    alignSelf: "center",
    flex: 1,
    flexGrow: 1,
  },
  entireItem: {
    alignSelf: "center",
    marginVertical: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#989eb1",
    width: "90%",
  },
  hide: {
    display: "none",
  },
  item: {
    flexDirection: "row",
    alignSelf: "center",
  },
  date: {
    color: "#989eb1",
    fontWeight: "700",
  },
  left: {
    alignSelf: "flex-start",
    width: "50%",
    marginLeft: 50,
    marginVertical: 5,
  },
  right: {
    width: "40%",
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  color1: {
    color: "#92d36e",
    fontWeight: "700",
  },
  color2: {
    color: "#f85f6a",
    fontWeight: "700",
  },
  category: {
    backgroundColor: "#989eb1",
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 5,
    width: "78%",
  },
  icons: {
    width: 17,
    height: 17,
  },
  color: {
    color: "white",
  },
  details: {
    paddingVertical: 5,
  },
});
