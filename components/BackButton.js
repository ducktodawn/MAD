import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function BackButton({navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 10 }}>
        <Image
          source={require('../assets/greyArrow.png')}
          style={styles.backArrow}
        />
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    backArrow: {
      width: 10,
      height: 20,
      marginTop: 23,
      paddingRight: 30
    },
    back: {
      marginTop: 20,
      fontSize: 15,
      color: '#989eb1',
      fontFamily: 'Roboto'
    },
  });