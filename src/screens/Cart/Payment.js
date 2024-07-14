import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
} from "react-native";

const Payment = () => {
  const [amount, setAmount] = useState("500.00");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const handlePayment = () => {
    // Handle payment logic here
    console.log("Payment initiated!");
  };

  const validateCardNumber = (text) => {
    const regex = /^[0-9]{13,19}$/;
    if (!regex.test(text)) {
      alert(
        "Invalid card number. Please enter a valid 13-19 digit card number."
      );
      return false;
    }
    return true;
  };

  const validateExpiryDate = (text) => {
    const regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
    if (!regex.test(text)) {
      alert("Invalid expiry date. Please enter a valid MM/YY format.");
      return false;
    }
    return true;
  };

  const validateSecurityCode = (text) => {
    const regex = /^[0-9]{3,4}$/;
    if (!regex.test(text)) {
      alert(
        "Invalid security code. Please enter a valid 3-4 digit security code."
      );
      return false;
    }
    return true;
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{}}
      keyboardShouldPersistTaps="handled"
      bounces={false}
      alwaysBounceVertical={false}
      bouncesZoom={false}
      style={styles.container}
    >
      <Text style={styles.title}>Payment amount</Text>
      <Text style={styles.amount}>Rs. {amount}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name on card</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNameOnCard}
          value={nameOnCard}
          placeholder="John Doe"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Card number</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setCardNumber(text);
          }}
          value={cardNumber}
          placeholder="1234 5678 9012 3456"
          keyboardType="number-pad"
          maxLength={19}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1, marginRight: 10 }}>
            <Text style={styles.label}>Expiry date</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setExpiryDate(text);
              }}
              value={expiryDate}
              placeholder="MM/YY"
              keyboardType="numbers-and-punctuation"
              maxLength={5}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.label}>CVV</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => {
                setSecurityCode(text);
              }}
              value={securityCode}
              placeholder="123"
              keyboardType="number-pad"
              maxLength={3}
              secureTextEntry={false}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={{ fontSize: 17, color: "white", fontWeight: "700" }}>
          Pay
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  amount: {
    fontSize: 21,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    lineHeight: 20,
  },
  payButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 40,
    padding: 10,
  },
});

export default Payment;
