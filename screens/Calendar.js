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
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from '../config/firebase';
import { getAuth } from "firebase/auth";

export default function CalendarScreen({ navigation }) {
  const AlertButton = () =>
    Alert.alert("Would you like to add for Expenses or Income?", "", [
      {
        text: "Expenses",
        onPress: () => navigation.navigate("Expenses", { date: selectedDay })
      },
      {
        text: "Income",
        onPress: () => navigation.navigate("Income", { date: selectedDay })
      },
    ]);
  const [selectedDay, setSelectedDay] = useState();
  const [markedDates, setMarkedDates] = useState();
  const [data, setData] = useState([]); // Initial empty array of users
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [moneyLost, setMoneyLost] = useState(0);

  const displayList = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const DATA = [];
    let moneyLost = 0;
    let moneyEarned = 0;
    const querySnapshot = await getDocs(collection(db, `/users/${user.uid}/expenses`));
    const querySnapshot2 = await getDocs(collection(db, `/users/${user.uid}/income`));
    querySnapshot.forEach((doc) => {
      if (doc.data().date == selectedDay) {
        DATA.push(doc.data());
        moneyLost += parseFloat(doc.data().amount.slice(1));
      }
    });
    querySnapshot2.forEach((doc) => {
      if (doc.data().date == selectedDay) {
        DATA.push(doc.data());
        moneyEarned += parseFloat(doc.data().amount.slice(1));
      }
    });
    setMoneyLost(moneyLost);
    setMoneyEarned(moneyEarned);
    setData(DATA);
  }

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      style={styles.item}
      amount={item.amount}
      type={item.type}
    />
  );
  const navigationItems = [
    { index: 0, title: "Home", selected: 1 },
    { index: 1, title: "Calendar", selected: 0 },
    { index: 2, title: "Statistics", selected: 1 },
    { index: 3, title: "Transactions", selected: 1 },
  ];
  function Item({ title, image, style, amount, type }) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <Image source={image} style={styles.icons} resizeMode="contain" />
          <Text style={style}>{title}</Text>
        </View>
        <Text style={type === "Income" ? styles.earnings : styles.cost}>{amount}</Text>
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

  useEffect(() => {
    displayList();
  });

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
            data={data}
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
                <Text style={styles.moneyLost}>${moneyLost}</Text>
              </View>
              <View style={styles.incomeRow}>
                <Text style={styles.income}>Income</Text>
                <Text style={styles.moneyEarned}>${moneyEarned}</Text>
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
  earnings: {
    paddingRight: 100,
    color: "#92d36e"
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
