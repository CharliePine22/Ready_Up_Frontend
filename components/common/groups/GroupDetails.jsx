import { View, Text, Pressable } from 'react-native';
import React from 'react';
import styles from './groupDetails.style.js';
import { FlatList } from 'react-native-gesture-handler';

const GroupDetails = ({ group, closeGroup }) => {
  console.log(group);
  return (
    <View style={styles.groupDetailsWrapper}>
      <View style={styles.groupHeader}>
        <Text>{group.groupName}</Text>

        <View style={styles.memberListContainer}>
          <FlatList
            horizontal={true}
            // style={styles.memberList}
            contentContainerStyle={styles.memberList}
            data={group.members}
            renderItem={({ item: member }) => <Text>{member}</Text>}
          />
        </View>
      </View>
      <Pressable onPress={closeGroup}>
        <Text>Close Group</Text>
      </Pressable>
    </View>
  );
};

export default GroupDetails;
