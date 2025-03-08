import { StyleSheet } from 'react-native';

// Styles for the DashboardScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    backgroundColor: '#f4f4f4',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  noTransactions: {
    textAlign: 'center',
    fontSize: 16,
    textAlignVertical: 'center',
    height: "85%",
    color: '#888',
    marginTop: 20,
  },
  transactionItem: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  transactionText: {
    fontSize: 18,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  emptyList: {
    textAlign: 'center',
    fontSize: 18,
    
    color: '#888',
    marginTop: 20,
  },
});

export default styles;