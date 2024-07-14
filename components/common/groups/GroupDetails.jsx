import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import React from "react";
import styles from "./groupDetails.style.js";

const GroupDetails = ({ group, closeGroup }) => {
  console.log(group);
  return (
    <View style={styles.groupDetailsWrapper}>
      <View style={styles.groupHeader}>
        <Text style={styles.groupName}>{group.groupName}</Text>

        <View style={styles.memberListContainer}>
          <FlatList
            horizontal={true}
            contentContainerStyle={styles.memberList}
            data={group.members}
            renderItem={({ item: member }) => (
              <Text
                style={{
                  marginHorizontal: 20,
                  marginVertical: 10,
                  fontWeight: 900,
                  color: "white",
                  fontSize: 18,
                }}
              >
                {member}
              </Text>
            )}
          />
        </View>
        <View style={styles.gamesPlayedListWrapper}>
          <ScrollView>
            {Object.entries(group.gamesPlayed)
              .sort(([, a], [, b]) => b - a)
              .map(([gameName, hoursPlayed]) => {
                return (
                  <View key={gameName}>
                    <Text style={styles.gamesListGameName}>
                      {gameName}: {hoursPlayed + " hours played"}
                    </Text>
                  </View>
                );
              })}
          </ScrollView>
        </View>
      </View>
      <Pressable onPress={closeGroup}>
        <Text>Close Group</Text>
      </Pressable>
    </View>
  );
};

export default GroupDetails;
