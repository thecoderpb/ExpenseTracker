import React from 'react';
import { View, Text, Alert } from 'react-native';
import styles from './styles';

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  // Ensure transaction data exists
  if (!transaction) {
    Alert.alert("Error", "Transaction details are unavailable.");
    return null; // Or you can redirect to another screen
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.date || 'No Date Available'}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailValue}>${transaction.amount || 'N/A'}</Text>

        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailValue}>{transaction.description || 'No description available'}</Text>

        <Text style={styles.detailLabel}>Location:</Text>
        <Text style={styles.detailValue}>{transaction.location || 'Location not specified'}</Text>

        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detailValue}>{transaction.category || 'No category assigned'}</Text>

        <Text style={styles.detailLabel}>Transaction Type:</Text>
        <Text style={styles.detailValue}>{transaction.transactionType || 'Unknown'}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;