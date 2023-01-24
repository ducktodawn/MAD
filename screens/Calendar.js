// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  DrawerLayoutAndroid,
  Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";
import BottomDrawer from "react-native-bottom-drawer-view";
import Navigation from "../components/Navigation";
import { collection, getDocs } from "firebase/firestore";
export default function CalendarScreen({ navigation }) {
  const AlertButton = () =>
    Alert.alert("Would you like to add for Expenses or Income?", "", [
      {
        text: "Expenses",
        onPress: () => navigation.navigate("Expenses", { date: selectedDay })
      },
      { text: "Income", onPress: () => navigation.navigate("Income", { date: selectedDay }) },
    ]);
  const [selectedDay, setSelectedDay] = useState();
  const [markedDates, setMarkedDates] = useState();
  const DATA = [
    {
      id: "1",
      title: "Food",
      image: require("../assets/food.png"),
      selectedImage: require("../assets/foodRed.png"),
      cost: "$2",
    },
    {
      id: "2",
      title: "Transport",
      image: require("../assets/transport.png"),
      selectedImage: require("../assets/transportRed.png"),
      cost: "$1",
    },
    {
      id: "3",
      title: "Shopping",
      image: require("../assets/shopping.png"),
      selectedImage: require("../assets/shoppingRed.png"),
      cost: "$2",
    },
    {
      id: "4",
      title: "Apparel",
      image: require("../assets/apparel.png"),
      selectedImage: require("../assets/apparelRed.png"),
      cost: "$1",
    },
    {
      id: "5",
      title: "Education",
      image: require("../assets/education.png"),
      selectedImage: require("../assets/educationRed.png"),
      cost: "$1",
    },
    {
      id: "6",
      title: "Entertainment",
      image: require("../assets/gaming.png"),
      selectedImage: require("../assets/gamingRed.png"),
      cost: "$2",
    },
    {
      id: "7",
      title: "Others",
      image: require("../assets/others.png"),
      selectedImage: require("../assets/othersRed.png"),
      cost: "$1",
    },
  ];
  
  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      style={styles.item}
      cost={item.cost}
    />
  );
  const navigationItems = [
    { index: 0, title: "Home", selected: 1 },
    { index: 1, title: "Calendar", selected: 0 },
    { index: 2, title: "Statistics", selected: 1 },
    { index: 3, title: "Transactions", selected: 1 },
  ];
  function Item({ title, image, style, cost }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={image} style={styles.icons} resizeMode="contain" />
          <Text style={style}>{title}</Text>
        </View>
        <Text style={styles.cost}>{cost}</Text>
      </View>
    );
  }
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const currentDate = `${year}-${month}-${day}`;
    setSelectedDay(currentDate);
    setMarkedDates({
      [currentDate]: { selected: true, selectedColor: "#f85f6a" },
    });
  }, []);

  const handleDayPress = (day) => {
    setSelectedDay(day.dateString);
    setMarkedDates({
      [day.dateString]: { selected: true, selectedColor: "#f85f6a" },
    });
  };
  const formatDate = (dateString) => {
    // console.log(dateString);
    const monthArr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dateString);
    const day = String(date.getDate());
    const month = monthArr[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };
  const drawer = useRef(null);
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
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.hamburger}
          activeOpacity={0.5}
          onPress={() => drawer.current.openDrawer()}
        >
          <Image source={require("../assets/hamburger.png")} />
        </TouchableOpacity>
        <Text style={styles.calendarTitle}>Calendar</Text>
        <>
          <Calendar
            onDayPress={handleDayPress}
            markedDates={markedDates}
            monthFormat={"MMM yyyy"}
            hideExtraDays={true}
            onPressArrowLeft={(subtractMonth) => subtractMonth()}
            onPressArrowRight={(addMonth) => addMonth()}
            enableSwipeMonths={true}
            style={styles.calendar}
            theme={{
              todayTextColor: null,
              arrowColor: "#f85f6a",
            }}
          />

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatList}
          />

          <BottomDrawer
            containerHeight={190}
            shadow={true} //shadow only appears on ios
            startUp={false}
            roundedEdges={true}
          >
            <View>
              <View style={styles.header}>
                <Text style={styles.blank}>empty</Text>
                <Text style={styles.date}>{formatDate(selectedDay)}</Text>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/cross.png")}
                    style={styles.cross}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.expensesRow}>
                <Text style={styles.expenses}>Expenses</Text>
                <Text style={styles.moneyLost}>$10</Text>
              </View>
              <View style={styles.incomeRow}>
                <Text style={styles.income}>Income</Text>
                <Text style={styles.moneyEarned}>$0</Text>
              </View>
              <TouchableOpacity style={styles.plusButton} onPress={AlertButton}>
                <Text style={styles.plus}>+</Text>
              </TouchableOpacity>
            </View>
          </BottomDrawer>
        </>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
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
  calendarTitle: {
    fontSize: 25,
    color: "#35424a",
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginLeft: 40,
  },
  item: {
    color: "#606060",
    paddingBottom: 20,
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  flatList: {
    paddingLeft: 35,
    paddingTop: 20,
    height: 180,
  },
  cost: {
    paddingRight: 100,
    color: "#f85f6a",
  },
  calendar: {
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  blank: {
    color: "white",
  },
  date: {
    paddingTop: 10,
    fontSize: 25,
    color: "#35424a",
  },
  cross: {
    height: 30,
    width: 30,
    marginTop: 13,
    marginRight: 10,
  },
  expensesRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  expenses: {
    color: "#989eb1",
    fontSize: 15,
  },
  moneyLost: {
    color: "#f85f6a",
    fontSize: 15,
  },
  incomeRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingTop: 20,
  },
  income: {
    color: "#989eb1",
    fontSize: 15,
  },
  moneyEarned: {
    color: "#92d36e",
    fontSize: 15,
  },
  plusButton: {
    backgroundColor: "#f85f6a",
    borderRadius: 100,
    position: "absolute",
    bottom: -50,
    right: 20,
    zIndex: 1,
  },
  plus: {
    fontSize: 30,
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
