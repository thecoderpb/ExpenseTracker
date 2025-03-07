import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles'; 

const TransactionDetailScreen = ({ route }) => {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{transaction.date}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Amount:</Text>
        <Text style={styles.detailValue}>${transaction.amount}</Text>

        <Text style={styles.detailLabel}>Description:</Text>
        <Text style={styles.detailValue}>{transaction.description}</Text>

        <Text style={styles.detailLabel}>Location:</Text>
        <Text style={styles.detailValue}>{transaction.location}</Text>

        <Text style={styles.detailLabel}>Category:</Text>
        <Text style={styles.detailValue}>{transaction.category}</Text>

        <Text style={styles.detailLabel}>Transaction Type:</Text>
        <Text style={styles.detailValue}>{transaction.transactionType}</Text>
      </View>
    </View>
  );
};

export default TransactionDetailScreen;