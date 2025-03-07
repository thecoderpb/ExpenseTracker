import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";

const DashboardScreen = ({ route, navigation }) => {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (newTransaction) => {
    console.log("Adding new transaction:", newTransaction);
    setTransactions([...transactions, newTransaction]);
  };

  useEffect(() => {
    console.log('updated: ', transactions);
  }, [transactions]);

  return (
    <SafeAreaView style={styles.container}>
      {transactions.length === 0 ? (
        <Text style={styles.noTransactions}>No transactions found</Text>
      ) : (
        <FlatList
          data={transactions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.transactionItem}
              onPress={() =>
                navigation.navigate("TransactionDetail", { transaction: item })
              }
            >
              <Text style={styles.transactionText}>
                {item.description} - ${item.amount}
              </Text>
            </TouchableOpacity>
          )}
          />
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate("AddTransaction", { handleAddTransaction })
        }
      >
        <Text style={styles.buttonText}>+ Add Transaction</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DashboardScreen;
