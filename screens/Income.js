// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';

const App = () => {
  const [value, setValue] = useState('');
  const [selected, setSelected] = useState();

  const DATA = [
    { id: '1', title: 'Allowance', image: require('./assets/allowance.png'), selectedImage: require('./assets/allowanceRed.png') },
    { id: '2', title: 'Commissions', image: require('./assets/commissions.png'), selectedImage: require('./assets/commissionsRed.png') },
    { id: '3', title: 'Salary', image: require('./assets/salary.png'), selectedImage: require('./assets/salaryRed.png') },
    { id: '4', title: 'Tips', image: require('./assets/tips.png'), selectedImage: require('./assets/tipsRed.png') },
    { id: '5', title: 'Others', image: require('./assets/others.png'), selectedImage: require('./assets/othersRed.png') },
  ];

  function Item({ id, title, image, selectedImage, onPress, style }) {
    return (
      <TouchableOpacity onPress={onPress} style={{ style }}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={selected === id ? selectedImage : image} style={styles.icons} resizeMode='contain' />
          <Text style={style}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  const handlePress = (item) => {
    setSelected(item.id);
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 10 }}>
        <Image
          source={require('./assets/greyArrow.png')}
          style={styles.backArrow}
        />
        <Text style={styles.back}>Back</Text>
      </View>
      <Text style={styles.income}>Income</Text>
      <Text style={styles.amountEarned}>Amount Earned</Text>
      <TextInput
        keyboardType='number-pad'
        style={styles.inputLine}
        onChangeText={text => setValue(text)}
        value={value}   //value of input
      />
      <Text style={styles.typeOfIncome}>Type of Income</Text>
      {selected ? (
        <View style={styles.tag}>
          <Image source={DATA.find(item => item.id === selected).image} style={styles.tagIcon} resizeMode='contain' />
          <Text style={styles.tagText}>{DATA.find(item => item.id === selected).title}</Text>
        </View>
      ) : (
        null
      )}
      <FlatList
        data={DATA}
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
        keyExtractor={item => item.id}
        style={styles.flatList}
      />
      <TouchableOpacity>
        <Text style={styles.button}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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