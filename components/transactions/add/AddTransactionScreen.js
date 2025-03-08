import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { DateTimePickerModal } from "react-native-modal-datetime-picker";
import styles from "./styles";

const AddTransactionScreen = ({ route, navigation }) => {
  const { handleAddTransaction } = route.params;

  // State variables for form inputs
  const [date, setDate] = useState(new Date());
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [transactionType, setTransactionType] = useState("Credit");
  const [category, setCategory] = useState("Shopping");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTypePicker, setShowTypePicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);

  // Form validation
  const validateForm = () => {
    if (!amount || !description || !location) {
      Alert.alert("Validation Error", "Please fill in all the required fields.");
      return false;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      Alert.alert("Validation Error", "Please enter a valid amount.");
      return false;
    }
    return true;
  };

  // Add transaction to the list
  const addTransaction = () => {
    if (validateForm()) {
      const newItem = {
        id: Math.random().toString(),
        description,
        amount: amount.toString(),
        location,
        transactionType,
        category,
        date: date.toDateString(),
      };
      handleAddTransaction(newItem);
      Alert.alert("Success", "Transaction Added");
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Date picker */}
        <Text style={styles.label}>Select Date:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowDatePicker(true)}
        >
          <Text>{date.toDateString()}</Text>
        </TouchableOpacity>

        {/* Date Picker Modal */}
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          date={date}
          onConfirm={(selectedDate) => {
            setDate(selectedDate);
            setShowDatePicker(false);
          }}
          onCancel={() => setShowDatePicker(false)}
        />
        {/* Amount input */}
        <Text style={styles.label}>Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={(text) => {
            const formattedText = text.replace(/[^0-9.]/g, ""); // Remove non-numeric characters
            setAmount(formattedText);
          }}
          placeholder="Enter amount"
        />

        {/* Description input */}
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter details"
        />

        {/* Location input */}
        <Text style={styles.label}>Location:</Text>
        <TextInput
          style={styles.input}
          value={location}
          onChangeText={setLocation}
          placeholder="Enter location"
        />

        {/* Transaction Type selection */}
        <Text style={styles.label}>Transaction Type:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowTypePicker(true)}
        >
          <Text>{transactionType}</Text>
        </TouchableOpacity>

        {/* Transaction Type Picker Modal */}
        <Modal visible={showTypePicker} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Picker
                selectedValue={transactionType}
                onValueChange={(itemValue) => setTransactionType(itemValue)}
              >
                <Picker.Item label="Credit" value="Credit" />
                <Picker.Item label="Debit" value="Debit" />
                <Picker.Item label="Refund" value="Refund" />
              </Picker>
              <TouchableOpacity onPress={() => setShowTypePicker(false)}>
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Category selection */}
        <Text style={styles.label}>Category:</Text>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setShowCategoryPicker(true)}
        >
          <Text>{category}</Text>
        </TouchableOpacity>

        {/* Category Picker Modal */}
        <Modal visible={showCategoryPicker} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                <Picker.Item label="Shopping" value="Shopping" />
                <Picker.Item label="Travel" value="Travel" />
                <Picker.Item label="Utility" value="Utility" />
              </Picker>
              <TouchableOpacity onPress={() => setShowCategoryPicker(false)}>
                <Text style={styles.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Add Transaction Button */}
        <TouchableOpacity style={styles.addButton} onPress={addTransaction}>
          <Text style={styles.addButtonText}>Add Transaction</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddTransactionScreen;