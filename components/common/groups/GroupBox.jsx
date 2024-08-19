import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "./groupBox.style";

const GroupBox = ({ group, openGroup }) => {
  // Grab the groups most played game
  const mostPlayedGame = (list) => {
    console.log(list);
    let games = Object.entries(list);
    console.log(games);
    // Sort games by hours played and return highest value.
    return games.sort(([, a], [, b]) => b - a)[0][1].name;
  };

  return (
    <TouchableOpacity
      style={{ marginTop: 15, marginBottom: 10 }}
      onPress={openGroup}
    >
      <ImageBackground
        source={{
          uri: "https://images.igdb.com/igdb/image/upload/t_1080p/ar5lk.jpg",
        }}
        resizeMode="cover"
        style={styles.groupBannerImage}
      >
        <View
          style={[
            styles.groupBoxWrapper,
            {
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.9,
              shadowRadius: 3,
              shadowColor: "black",
            },
          ]}
          onClick={openGroup}
        >
          <View style={styles.innerGroupBox}>
            <Text style={styles.groupName}>{group.groupName}</Text>
            {/* How Many users in the group there are */}
            <View style={styles.memberCountContainer}>
              <MaterialCommunityIcons
                name="account-group"
                size={20}
                color={"white"}
              />
              <Text style={styles.memberCount}>{group.members.length}</Text>
            </View>
            {/* How many users are currently ready */}
            <View style={styles.memberCountContainer}>
              <MaterialCommunityIcons
                name="account-multiple-check"
                size={23}
                style={{ marginTop: 2 }}
                color={"white"}
              />
              <Text style={styles.readyCount}>{group.readyCount}</Text>
            </View>
          </View>
          <View style={styles.lowerSection}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 15,
                marginBottom: 5,
                color: "white",
              }}
            >
              <Text style={{ fontWeight: 700 }}>Recently Played: </Text>
              {group.recentlyPlayed}
            </Text>
            <Text
              style={{
                textAlign: "right",
                fontSize: 15,
                marginBottom: 5,
                color: "white",
              }}
            >
              <Text style={{ fontWeight: 700 }}>Last Played: </Text>
              {group.lastPlayed}
            </Text>
            <Text style={{ textAlign: "right", fontSize: 15, color: "white" }}>
              <Text style={{ fontWeight: 700 }}>Most Played: </Text>
              {mostPlayedGame(group.gamesList)}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GroupBox;
