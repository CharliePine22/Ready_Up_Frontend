import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./groupDetails.style.js";
import { FlatList } from "react-native-gesture-handler";

const GroupDetails = ({ group, closeGroup }) => {
  console.log(group);
  return (
    <View style={styles.groupDetailsWrapper}>
      <View style={styles.groupHeader}>
        <Text>{group.groupName}</Text>
        <FlatList></FlatList>
      </View>
      <Pressable onPress={closeGroup}>
        <Text>Close Group</Text>
      </Pressable>
    </View>
  );
};

export default GroupDetails;
