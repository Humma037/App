import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

export default function App() {
  const [selectedImages, setSelectedImages] = useState([]);

  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      width: 300,
      height: 400,
      cropping: true,
    })
      .then((images) => {
        if (images && images.length > 0) {
          setSelectedImages(images.map((image) => ({ uri: image.path })));
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Pick Images" onPress={openImagePicker} />
      <ScrollView>
        <View style={styles.row}>
          {selectedImages.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: '32%', 
    height: 150,   
    marginVertical: 5,
  },
});
