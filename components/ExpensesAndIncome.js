import { View, FlatList, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from '../config/firebase';
export default function ExpensesAndIncome({ data, value, navigation }) {
  const [selected, setSelected] = useState();
  function Item({ id, title, image, selectedImage, onPress, style }) {
    return (
      <TouchableOpacity onPress={onPress} style={{ style }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={selected === id ? selectedImage : image}
            style={styles.icons}
            resizeMode="contain"
          />
          <Text style={style}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const handlePress = (item) => {
    setSelected(item.id);
  };

  const onPress = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (data.length == 5) {
        await addDoc(collection(db, `/users/${user.uid}/income`), {
          amount: value,
          type: data[selected-1].title
        });
        // console.log("Document written with ID: ", docRef.id);
      } else {
        await addDoc(collection(db, `/users/${user.uid}/expenses`), {
          amount: value,
          type: data[selected-1].title
        });
        // console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <View>
      {selected ? (
        <View style={styles.tag}>
          <Image
            source={data.find((item) => item.id === selected).image}
            style={styles.tagIcon}
            resizeMode="contain"
          />
          <Text style={styles.tagText}>
            {data.find((item) => item.id === selected).title}
          </Text>
        </View>
      ) : null}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            title={item.title}
            image={item.image}
            selectedImage={item.selectedImage}
            onPress={() => handlePress(item)}
            style={selected === item.id ? styles.itemPress : styles.item}
          />
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
      <TouchableOpacity>
        <Text style={styles.button} onPress={() => navigation.navigate("Calendar")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    width: 10,
    height: 20,
    marginTop: 23,
    paddingRight: 30,
  },
  back: {
    marginTop: 20,
    fontSize: 15,
    color: "#989eb1",
    fontFamily: "Roboto",
  },
  expenses: {
    fontSize: 25,
    color: "#35424a",
    fontFamily: "Roboto",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 45,
  },
  amountSpent: {
    fontSize: 17,
    color: "#f85f6a",
    fontFamily: "Roboto",
    paddingTop: 20,
    paddingLeft: 45,
  },
  inputLine: {
    width: 200,
    borderBottomColor: "#ebebeb",
    borderBottomWidth: 2,
    marginLeft: 45,
  },
  typeOfExpense: {
    fontSize: 17,
    color: "#f85f6a",
    fontFamily: "Roboto",
    paddingTop: 35,
    paddingLeft: 45,
    paddingBottom: 10,
  },
  item: {
    color: "#606060",
    paddingBottom: 20,
  },
  itemPress: {
    color: "#f85f6a",
    paddingBottom: 20,
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  tag: {
    flexDirection: "row",
    marginLeft: 45,
    marginRight: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d6d6d6",
  },
  tagIcon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  tagText: {
    paddingTop: 10,
    color: "#606060",
  },
  flatList: {
    paddingLeft: 50,
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#f85f6a",
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
  },
});
