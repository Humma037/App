import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, FlatList } from 'react-native';

const RestaurantBill = () => {
  const [payment, setPayment] = useState('');
  const [payments, setPayments] = useState([]);

  const addPayment = () => {
    if (payment.trim() !== '') {
      setPayments([...payments, payment]);
      setPayment('');
    }
  };

  const rewritePayment = (index, newPayment) => {
    const updatedPayments = [...payments];
    updatedPayments[index] = newPayment;
    setPayments(updatedPayments);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Restaurant Bill Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a payment..."
        value={payment}
        onChangeText={text => setPayment(text)}
      />
      <Button title="Add Payment" onPress={addPayment} />
      <FlatList
        data={payments}
        renderItem={({ item, index }) => (
          <View style={styles.paymentItem}>
            <Text style={styles.paymentText}>{item}</Text>
            <View style={styles.paymentButtons}>
              <Button
                title="Rewrite"
                onPress={() => {
                  const newPayment = prompt('Enter the new payment:');
                  if (newPayment !== null && newPayment.trim() !== '') {
                    rewritePayment(index, newPayment);
                  }
                }}
              />
              <Button
                title="Delete"
                onPress={() => {
                  const updatedPayments = payments.filter((_, i) => i !== index);
                  setPayments(updatedPayments);
                }}
              />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  paymentText: {
    flex: 1,
  },
  paymentButtons: {
    flexDirection: 'row',
  },
});

export default RestaurantBill;
