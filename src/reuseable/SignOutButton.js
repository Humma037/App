import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const SignOutButton = ({ visible, onSignOut, onCancel }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>Are you sure want to sign out?</Text>
          <View style={styles.signOutContainer}>
            <TouchableOpacity onPress={onCancel}>
              <Text style={styles.signOutText}>Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSignOut}>
              <Text style={styles.signOutText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#696969',
    borderRadius: 10,
    padding: 20,
    width: 300
  },
  modalText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  signOutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signOutText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  cancelText: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});

export default SignOutButton;
