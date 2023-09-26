import React, { View, ScrollView, Image, Text, StyleSheet} from 'react-native';

const array = [
  {
    title: 'Step No-1',
    img: require('./src/images/image1.jpg')
  },
  {
    title: 'Step No-2',
    img: require('./src/images/image2.jpg')
  },
  {
    title: 'Step No-3',
    img: require('./src/images/image3.jpg')
  },
  {
    title: 'Step No-4',
    img: require('./src/images/image4.jpg')
  },
  {
    title: 'Step No-5',
    img: require('./src/images/image5.jpg')
  },
  {
    title: 'Step No-6',
    img: require('./src/images/images6.jpg')
  },
  {
    title: 'Step No-7',
    img: require('./src/images/image7.jpg')
  },
];
const secondarray = [
  {
    name: 'App Development',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Web Development',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Digital Marketing',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Graphic Designing',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Content Creation',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Content Writing',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'UI/UX Designing',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },
  {
    name: 'Web React JS',
    fee: 'Rs. 30,000/-',
    image: require('./src/images/image7.jpg')
  },

];

const image = {uri: 'https://background-free-vector.jpg'};

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal={true}>
        {array.map((item) => {
          return (
            <View>
              <Text style={styles.steps}>{item.title}</Text>
              <Image style={{ width: 270, height: 290, borderRadius: 15, margin: 10 }} resizeMode={'contain'} source={item.img} />
            </View>
          )
        })}
      </ScrollView>
      {secondarray.map((course, index) => (
        <View key={index} style={styles.courseContainer}>
          <Image source={course.image} style={styles.courseImage} />
          <View style={{ flexDirection: 'column', margin: 15 }}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseFee}>{course.fee}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
    
  )
};

