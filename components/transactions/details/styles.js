import { StyleSheet } from 'react-native';

// Styles for the TransactionDetailScreen component
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    detailContainer: {
      backgroundColor: '#fff',
      padding: 15,
      borderRadius: 10,
      elevation: 3, 
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 1 }, 
      shadowOpacity: 0.3,
      shadowRadius: 3, 
    },
    detailLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#555',
      marginTop: 10,
    },
    detailValue: {
      fontSize: 16,
      color: '#333',
      marginBottom: 10,
    },
  });

  export default styles;