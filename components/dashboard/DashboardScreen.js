import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

const DashboardScreen = ({ navigation }) => {
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction to the list
  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <View>
      {
  transactions.length ? (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.transactionItem}
          onPress={() =>
            navigation.navigate("TransactionDetail", {
              transaction: item,
            })
          }
        >
          <Text style={styles.transactionText}>
            {item.description} - ${item.amount}
          </Text>
        </TouchableOpacity>
      )}
    />
  ) : (
    <Text style={styles.emptyList}>No transactions found</Text>
  )
}


        {/* Button to navigate to AddTransaction screen, passing the add function */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            navigation.navigate("AddTransaction", { handleAddTransaction })
          }
        >
          <Text style={styles.buttonText}>+ Add Transaction</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;