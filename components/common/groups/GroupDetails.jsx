import { View, Text, Pressable, FlatList, ScrollView } from "react-native";
import React from "react";
import styles from "./groupDetails.style.js";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const GroupDetails = ({ group, closeGroup }) => {
  return (
    <View style={styles.groupDetailsWrapper}>
      <ScrollView>
        <View style={styles.groupHeader}>
          <Text style={styles.groupName}>{group.groupName}</Text>
          {/* Members List Wrapper */}
          <View style={styles.headerFontContainer}>
            <Text
              style={[
                styles.headerFont,
                {
                  color: "white",
                  paddingHorizontal: 10,
                  lineHeight: 53,
                },
              ]}
            >
              Members
            </Text>
          </View>
          <View style={styles.memberListContainer}>
            <FlatList
              horizontal={true}
              contentContainerStyle={styles.memberList}
              data={group.members}
              renderItem={({ item: member }) => (
                <Text
                  style={[
                    styles.baseFont,
                    {
                      // marginHorizontal: 20,
                      marginVertical: 0,
                      color: "white",
                    },
                  ]}
                >
                  {member}
                </Text>
              )}
            />
          </View>
        </View>

        <View style={styles.groupBodyWrapper}>
          {/* GROUP GAME SELECTION */}
          <View style={styles.gameSelectionWrapper}>
            <View style={styles.headerFontContainer}>
              <Text
                style={[
                  styles.headerFont,
                  {
                    color: "white",
                    paddingHorizontal: 10,
                    lineHeight: 53,
                  },
                ]}
              >
                Game Selection
              </Text>
            </View>
            <View style={styles.gameCaseContainer}>
              <Text>?</Text>
            </View>
          </View>
          {/* GROUP GAMES LIST */}
          <View style={styles.headerFontContainer}>
            <Text
              style={[
                styles.headerFont,
                {
                  paddingHorizontal: 10,
                },
              ]}
            >
              Games List
            </Text>
          </View>
          <View style={styles.gamesPlayedListWrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {Object.entries(group.gamesPlayed)
                .sort(([, a], [, b]) => b - a)
                .map(([gameName, hoursPlayed], idx) => {
                  return (
                    <View key={gameName}>
                      <Text
                        style={[
                          styles.gamesListGameName,
                          {
                            color:
                              idx == 0
                                ? "gold"
                                : idx === 1
                                ? "silver"
                                : idx === 2
                                ? "#905923"
                                : "white",
                            fontWeight: idx <= 2 && 900,
                          },
                        ]}
                      >
                        <>
                          {gameName}: {hoursPlayed + " hours"}
                        </>
                      </Text>
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>

        <Pressable onPress={closeGroup} style={styles.closeGroupBtn}>
          <MaterialCommunityIcons
            name="arrow-left-bold-outline"
            size={40}
            color={"white"}
          />
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default GroupDetails;
