// Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// Class: DIT/FT/1B/05
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";

import EmailAndPassword from "../components/EmailAndPassword";


export default function SignInScreen({ navigation }) {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.text}>Welcome back!</Text>

      <EmailAndPassword page="signin" navigation={navigation} />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    fontFamily: "Roboto",
  },
  title: {
    fontSize: 30,
    marginLeft: 40,
    fontWeight: "bold",
  },
  text: {
    color: "#989eb1",
    marginLeft: 40,
    marginTop: 10,
    fontWeight: "600",
  },
  image: {
    margin: 50,
    width: "30%",
    height: "10%",
    alignSelf: "center",
  },
});
// // Names: Dawn Oh Le Qian (2222923) Jeanette Ong Jing Xuan (2222808)
// // Class: DIT/FT/1B/05
// import {
//   StyleSheet,
//   Text,
//   Image,
//   KeyboardAvoidingView,
// } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';
// import EmailAndPassword from "../components/EmailAndPassword";
// import HomeScreen from "./Home";


// export default function SignInScreen({ navigation }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getUserToken = async () => {
//       try {
//         const userToken = await AsyncStorage.getItem('userToken');
//         if (userToken) {
//           navigation.navigate('Home');
//         } else {
//           setLoading(false);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUserToken();
//   }, [navigation]);

//   if (loading) {
//     return (
//       <KeyboardAvoidingView style={styles.container}>
//         <Image source={require("../assets/logo.png")} style={styles.image} />
//         <Text style={styles.title}>Sign In</Text>
//         <Text style={styles.text}>Welcome back!</Text>
  
//         <EmailAndPassword page="signin" navigation={navigation} />
//       </KeyboardAvoidingView>
//     );
//   } return <HomeScreen />;
  
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "flex-start",
//     fontFamily: "Roboto",
//   },
//   title: {
//     fontSize: 30,
//     marginLeft: 40,
//     fontWeight: "bold",
//   },
//   text: {
//     color: "#989eb1",
//     marginLeft: 40,
//     marginTop: 10,
//     fontWeight: "600",
//   },
//   image: {
//     margin: 50,
//     width: "30%",
//     height: "10%",
//     alignSelf: "center",
//   },
// });
