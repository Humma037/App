import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={toggleLike}>
      <View
        style={{
          padding: 6,
          backgroundColor: liked ? 'pink' : 'pink',
          borderRadius: 5,
          marginRight:50,
          // marginTop:25
        }}
      >
        <Icon name="heart" size={14} color={liked ? 'white' : 'red'} />
      </View>
    </TouchableOpacity>
  );
};

export default LikeButton;
