// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import ExpensesAndIncome from '../components/ExpensesAndIncome';
export default function IncomeScreen({navigation}) {
  const [value, setValue] = useState('');


  const DATA = [
    { id: '1', title: 'Allowance', image: require('../assets/allowance.png'), selectedImage: require('../assets/allowanceRed.png') },
    { id: '2', title: 'Commissions', image: require('../assets/commissions.png'), selectedImage: require('../assets/commissionsRed.png') },
    { id: '3', title: 'Salary', image: require('../assets/salary.png'), selectedImage: require('../assets/salaryRed.png') },
    { id: '4', title: 'Tips', image: require('../assets/tips.png'), selectedImage: require('../assets/tipsRed.png') },
    { id: '5', title: 'Others', image: require('../assets/others.png'), selectedImage: require('../assets/othersRed.png') },
  ];

 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 10 }}>
        <Image
          source={require('../assets/greyArrow.png')}
          style={styles.backArrow}
        />
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.income}>Income</Text>
      <Text style={styles.amountEarned}>Amount Earned</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.inputLine}
        onChangeText={text => setValue(text)}
        value={value}   //value of input
      />
      <Text style={styles.typeOfIncome}>Type of Income</Text>
      <ExpensesAndIncome data={DATA} value ={value} navigation={navigation}></ExpensesAndIncome>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  backArrow: {
    width: 10,
    height: 20,
    marginTop: 23,
    paddingRight: 30
  },
  back: {
    fontSize: 15,
    color: '#989eb1',
    fontFamily: 'Roboto',
    marginTop: 20,
  },
  income: {
    fontSize: 25,
    color: '#35424a',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 45
  },
  amountEarned: {
    fontSize: 17,
    color: '#f85f6a',
    fontFamily: 'Roboto',
    paddingTop: 20,
    paddingLeft: 45
  },
  inputLine: {
    width: 200,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 2,
    marginLeft: 45
  },
  typeOfIncome: {
    fontSize: 17,
    color: '#f85f6a',
    fontFamily: 'Roboto',
    paddingTop: 35,
    paddingLeft: 45,
    paddingBottom: 10
  },
  item: {
    color: '#606060',
    paddingBottom: 20,
  },
  itemPress: {
    color: '#f85f6a',
    paddingBottom: 20,
  },
  icons: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  tag: {
    flexDirection: 'row',
    marginLeft: 45,
    marginRight: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d6d6d6'
  },
  tagIcon: {
    width: 20,
    height: 20,
    margin: 10
  },
  tagText: {
    paddingTop: 10,
    color: '#606060'
  },
  flatList: {
    paddingLeft: 50,
    paddingTop: 20,
    marginBottom:100
  },
  button: {
    backgroundColor: '#f85f6a',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5
  }
});