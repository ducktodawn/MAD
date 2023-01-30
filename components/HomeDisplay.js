import { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  Dimensions,
  Image,
  View,
} from "react-native";

import { ProgressChart } from "react-native-chart-kit";
import Hamburger from "../components/Hamburger";
import HomeText from "./HomeText";
import { getAuth } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { SelectList } from "react-native-dropdown-select-list";

const screenWidth = Dimensions.get("window").width;

const Item = ({ title, image, amount, type }) => (
  <View style={styles.entireItem}>
    <View style={styles.SeparatorLine} />
    <View style={styles.item}>
      <View style={styles.left}>
        <Text style={styles.color}>
          <Image source={image} style={styles.icons} />
          {"  "}
          {title}
        </Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.color}>{amount}</Text>
      </View>
    </View>
  </View>
);
const renderItem = ({ item }) => (
  <View>
    <Item title={item.title} amount={item.amount} image={item.image} type={item.type} />
  </View>
);

export default function HomeDisplay() {
  const [DATA, setData] = useState([]);
  const [moneyLost, setMoneyLost] = useState(0);
  const [selected, setSelected] = useState("All");
  const selectionOptions = [
    { key: 1, value: "All" },
    { key: 2, value: "Expenses" },
    { key: 3, value: "Income" },
  ];
  const displayList = async () => {
    try {
      let currentDate = new Date().toJSON().slice(0, 10);
      const auth = getAuth();
      const user = auth.currentUser;
      const DATA = [];
      let moneyLost = 0;
      const querySnapshot = await getDocs(
        collection(db, `/users/${user.uid}/expenses`)
      );
      const querySnapshot2 = await getDocs(
        collection(db, `/users/${user.uid}/income`)
      );
      querySnapshot.forEach((doc) => {
        if (doc.data().date == currentDate) {
          DATA.push(doc.data());
          moneyLost += parseFloat(doc.data().amount.slice(1));
        }
      });
      querySnapshot2.forEach((doc) => {
        if (doc.data().date == currentDate) {
          DATA.push(doc.data());
        }
      });
      setMoneyLost(moneyLost);
      setData(DATA);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    displayList();
  });
  const data = {
    data: [moneyLost / 100],
  };
  return (
    <View>
      <HomeText />
      <ProgressChart
        data={data}
        width={screenWidth - 15}
        height={150}
        chartConfig={{
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          color: (opacity = 1) => `rgba(248, 95, 106, ${opacity})`,
        }}
        hideLegend={true}
        radius={55}
        style={styles.chart}
      />
      <View style={styles.money}>
        <Text style={styles.value}>${moneyLost}</Text>
      </View>
      <View style={styles.box}>
        <Text style={moneyLost > 100 ? styles.exceedBudget : styles.withinBudget}>
          You spent {data.data * 100}% of your recommended budget
        </Text>
      </View>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={selectionOptions}
        save="value"
        search={false}
        placeholder={"All"}
        defaultOption={"All"}
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
      <SafeAreaView style={styles.spendingList}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  arrow: {
    height: 18,
    width: 18,
  },
  SeparatorLine: {
    borderBottomColor: "rgba(222, 226, 230, 0.5)",
    marginHorizontal: 25,
    marginVertical: 10,
    borderBottomWidth: 2,
    alignSelf: "stretch",
  },
  money: {
    position: "absolute",
    top: "10%",
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
  },
  chart: {
    marginLeft: 7,
    alignItems: "center",
  },
  value: {
    color: "#f85f6a",
    fontWeight: "700",
    fontSize: 25,
  },
  box: {
    width: "80%",
    padding: 15,
    marginTop: 25,
    alignSelf: "center",
    backgroundColor: "rgba(222, 226, 230, 0.25)",
  },
  withinBudget: {
    color: "#92d36e",
    alignSelf: "center",
    fontSize: 24,
  },
  exceedBudget: {
    color: "#f85f6a",
    alignSelf: "center",
    fontSize: 24,
  },
  spendingList: {
    marginTop: 25,
    height: 180
  },
  icons: {
    height: 17,
    width: 17,
  },
  entireItem: {
    marginVertical: 5,
  },
  item: {
    flexDirection: "row",
    alignSelf: "center",
  },
  left: {
    alignSelf: "flex-start",
    width: "50%",
    marginLeft: 95,
    marginVertical: 5,
  },
  right: {
    width: "40%",
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  color: {
    color: "#989eb1",
    fontWeight: "600",
  },
  selectList: {
    marginLeft: 40,
    marginVertical: 10,
    backgroundColor: "#f85f6a",
  },
  hide: {
    display: "none",
  },
});
