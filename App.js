import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import TransactionsScreen from './screens/Transaction';
import CalendarScreen from './screens/Calendar';
import StatisticsScreen from './screens/Statistics';
import StatisticsPieChartScreen from './screens/StatisticsPieChart';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Calendar" component={CalendarScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Statistics" component={StatisticsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="StatisticsPieChart" component={StatisticsPieChartScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;