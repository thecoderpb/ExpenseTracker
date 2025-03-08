import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import styles from './styles'; 

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle login logic: navigate to Dashboard if credentials are correct
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      navigation.replace('Dashboard'); // Replace current screen with Dashboard
    } else {
      Alert.alert('Invalid Credentials', 'Username or Password is incorrect'); // Show alert for invalid login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expense Tracker</Text>

      {/* Username input */}
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
        autoCapitalize="none" 
      />

      {/* Password input */}
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;