import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./components/login/LoginScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import TransactionDetailScreen from "./components/transactions/details/TransactionDetailScreen";
import AddTransactionScreen from "./components/transactions/add/AddTransactionScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={({ navigation }) => ({
            title: "Dashboard",

            headerTitleAlign: "center",
            headerLeft: null,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.replace("Login");
                }}
                style={{ marginRight: 15 }}
              >
                <Icon name="logout" size={26} color="#0307fc" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
