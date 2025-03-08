import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/login/LoginScreen";
import DashboardScreen from "./components/dashboard/DashboardScreen";
import TransactionDetailScreen from "./components/transactions/details/TransactionDetailScreen";
import AddTransactionScreen from "./components/transactions/add/AddTransactionScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

// Create the Stack Navigator
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* Set up the Stack Navigator with initial route as Login */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* Login Screen - Hide the header */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Dashboard Screen */}
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={({ navigation }) => ({
            title: "Dashboard", // Title of the screen
            headerTitleAlign: "center", // Center the title
            headerLeft: null, // No back button
            headerRight: () => (
              // Logout button on the right of the header
              <TouchableOpacity
                onPress={() => {
                  // Replace the current screen with Login when clicked
                  navigation.replace("Login");
                }}
                style={{ marginRight: 15 }}
              >
                <Icon name="logout" size={26} color="#0307fc" /> {/* Icon for logout */}
              </TouchableOpacity>
            ),
          })}
        />

        {/* Transaction Detail Screen */}
        <Stack.Screen
          name="TransactionDetail"
          component={TransactionDetailScreen}
        />

        {/* Add Transaction Screen */}
        <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;