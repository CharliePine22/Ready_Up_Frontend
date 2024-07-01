import { View, Text, Pressable } from 'react-native';
import React from 'react';

const GroupDetails = ({ group, closeGroup }) => {
  console.log(group);
  return (
    <View>
      <Text>GroupDetails</Text>
      <Pressable onPress={closeGroup}>
        <Text>Close Group</Text>
      </Pressable>
    </View>
  );
};

export default GroupDetails;
