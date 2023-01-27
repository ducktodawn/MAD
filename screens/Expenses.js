// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { StyleSheet, View } from 'react-native';
import ExpensesAndIncomeInput from '../components/ExpensesAndIncomeInput';
import BackButton from '../components/BackButton';
export default function ExpensesScreen({ route, navigation }) {

  
  const DATA = [
    { id: '1', title: 'Food', image: require('../assets/food.png'), selectedImage: require('../assets/foodRed.png') },
    { id: '2', title: 'Transport', image: require('../assets/transport.png'), selectedImage: require('../assets/transportRed.png') },
    { id: '3', title: 'Shopping', image: require('../assets/shopping.png'), selectedImage: require('../assets/shoppingRed.png') },
    { id: '4', title: 'Apparel', image: require('../assets/apparel.png'), selectedImage: require('../assets/apparelRed.png') },
    { id: '5', title: 'Education', image: require('../assets/education.png'), selectedImage: require('../assets/educationRed.png') },
    { id: '6', title: 'Entertainment', image: require('../assets/gaming.png'), selectedImage: require('../assets/gamingRed.png') },
    { id: '7', title: 'Others', image: require('../assets/others.png'), selectedImage: require('../assets/othersRed.png') },
  ];

  // const onPress = (value) => {
  //   setSelected(item.id);
  // };

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} />
      <ExpensesAndIncomeInput route={route} DATA ={DATA} navigation={navigation} title={"Expenses"} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});