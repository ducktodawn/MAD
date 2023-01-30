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
} from "react-native";

import { Calendar } from "react-native-calendars";
import BottomDrawer from "react-native-bottom-drawer-view";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { getAuth } from "firebase/auth";

import Sidebar from "../components/Sidebar";
import Hamburger from "../components/Hamburger";
import CalendarDrawerContents from "../components/CalendarDrawerContents";

export default function CalendarScreen({ navigation }) {
  const [selectedDay, setSelectedDay] = useState();
  const [markedDates, setMarkedDates] = useState();
  const [data, setData] = useState([]); // Initial empty array of users
  const [moneyEarned, setMoneyEarned] = useState(0);
  const [moneyLost, setMoneyLost] = useState(0);
  const displayList = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const DATA = [];
      let moneyLost = 0;
      let moneyEarned = 0;
      const querySnapshot = await getDocs(
        collection(db, `/users/${user.uid}/expenses`)
      );
      const querySnapshot2 = await getDocs(
        collection(db, `/users/${user.uid}/income`)
      );
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
    } catch (error) {
      console.log(error);
    }
  };

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
        <Text style={type === "Income" ? styles.earnings : styles.cost}>
          {amount}
        </Text>
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
        <Sidebar
          navigation={navigation}
          navigationItems={navigationItems}
          closeDrawer={() => drawer.current.closeDrawer()}
        />
      )}
      style={styles.container}
    >
      <View style={styles.container}>
        <Hamburger onPress={() => drawer.current.openDrawer()} />
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
            keyExtractor={(item) => Math.random()}
            style={styles.flatList}
          />
          <BottomDrawer
            containerHeight={190}
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
              <CalendarDrawerContents
                moneyEarned={moneyEarned}
                moneyLost={moneyLost}
                navigation={navigation}
                selectedDay={selectedDay}
              />
            </View>
          </BottomDrawer>
        </>
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
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
    color: "#92d36e",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
