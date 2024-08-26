import { useState } from "react";
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
  const [groupTopGame, setGroupTopGame] = useState("");
  console.log(group);
  // Grab the groups most played game
  const mostPlayedGame = (list) => {
    let games = Object.entries(list);
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
          uri: group.previouslyPlayed.banner,
        }}
        resizeMode="cover"
        style={styles.groupBannerImage}
        imageStyle={{ opacity: 0.6 }}
      >
        <View
          style={[
            styles.groupBoxWrapper,
            {
              shadowOffset: {
                width: 0,
                height: 7,
              },
              // shadowOpacity: 0.7,
              shadowRadius: 7,
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
                size={28}
                color={"white"}
              />
              <Text style={styles.memberCount}>{group.members.length}</Text>
            </View>
            {/* How many users are currently ready */}
            {group.chosenGame && (
              <View style={styles.memberCountContainer}>
                <MaterialCommunityIcons
                  name="account-multiple-check"
                  size={23}
                  style={{ marginTop: 2 }}
                  color={"white"}
                />
                <Text style={styles.readyCount}>{group.readyCount}</Text>
              </View>
            )}
          </View>
          <View style={styles.lowerSection}>
            <Text
              style={{
                textAlign: "right",
                fontSize: 18,
                marginBottom: 5,
                color: "white",
              }}
            >
              <Text style={{ fontWeight: 700 }}>Recently Played: </Text>
              {group.previouslyPlayed.name}
            </Text>
            <Text style={{ textAlign: "right", fontSize: 18, color: "white" }}>
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
