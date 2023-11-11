import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import TouchableText from '../reuseable/TouchableText';

const IconCounter = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [starCount, setStarCount] = useState(0);
  const [heartCount, setHeartCount] = useState(0);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const increaseHeartCount = () => {
    setHeartCount(heartCount + 1);
  };

  const increaseStarCount = () => {
    setStarCount(starCount + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={increaseHeartCount}>
          <Icon name="heart" size={13} color="red" style={styles.heartIcon} />
          <Text style={styles.heartCountText}>{heartCount}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={increaseStarCount}>
          <Icon name="edit" size={13} color="green" style={styles.starIcon} />
          <Text style={styles.starCountText}>{starCount}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toggleModal}>
        <Icon name="dots-three-horizontal" size={13} color="black" style={styles.dotsIcon} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableOpacity style={styles.modalContainer} onPress={toggleModal}>
          <View style={styles.modalContent}>
            <TouchableText
              text="Save Image"
              onPress={() => {
                navigation.navigate('Home'); 
              }}
              style={styles.accountRegister}
            />
            <TouchableText
              text="Share Link"
              onPress={() => {
                navigation.navigate('Home'); 
              }}
              style={styles.accountRegister}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 110,
    marginLeft: 100
  },
  modalContent: {
    width: 150,
    height: 80,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderColor: 'black',
    borderRadius: 10,
  },
  modalText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  dotsIcon: {
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 7,
  },
  iconContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  starIcon: {
    backgroundColor: 'white',
    padding: 5,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 7,
    borderWidth: 1,
    backgroundColor: '#EAFF87'
  },
  starCountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 3,
    paddingLeft: 10
  },
  heartIcon: {
    backgroundColor: 'white',
    padding: 5,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 7,
    backgroundColor: 'pink'

  },
  heartCountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 3,
    paddingLeft: 10
  },
});

export default IconCounter;
