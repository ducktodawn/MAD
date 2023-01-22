import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from './screens/SignIn';
import SignUpScreen from "./screens/SignUp";
import HomeScreen from "./screens/Home";
import TransactionsScreen from "./screens/Transaction";
import CalendarScreen from "./screens/Calendar";
import StatisticsScreen from "./screens/Statistics";
import StatisticsPieChartScreen from "./screens/StatisticsPieChart";
import ExpensesScreen from "./screens/Expenses"
import IncomeScreen from "./screens/Income"
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transactions"
          component={TransactionsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Expenses"
          component={ExpensesScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Income"
          component={IncomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StatisticsPieChart"
          component={StatisticsPieChartScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

