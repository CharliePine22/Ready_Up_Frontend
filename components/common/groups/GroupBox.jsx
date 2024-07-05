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
  // console.log(group.mostPlayedGame());
  return (
    <TouchableOpacity style={{ marginBottom: 25 }} onPress={openGroup}>
      <ImageBackground
        source="https://images.igdb.com/igdb/image/upload/t_1080p/ar5lk.jpg"
        resizeMode="cover"
        style={styles.groupBannerImage}
      >
        <View style={styles.groupBoxWrapper} onClick={openGroup}>
          <View style={styles.groupAvatarBox}></View>
          <View style={styles.innerGroupBox}>
            <Text style={styles.groupName}>{group.groupName}</Text>
            {/* How Many users in the group there are */}
            <View style={styles.memberCountContainer}>
              <MaterialCommunityIcons
                name="account-group"
                size={24}
                color={"white"}
              />
              <Text style={styles.memberCount}>{group.groupCount()}</Text>
            </View>
            {/* How many users are currently ready */}
            <View style={styles.memberCountContainer}>
              <MaterialCommunityIcons
                name="account-multiple-check"
                size={26}
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
              <Text style={{ fontWeight: 700 }}>Recently Played:</Text>{" "}
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
              <Text style={{ fontWeight: 700 }}>Last Played:</Text>{" "}
              {group.lastPlayed}
            </Text>
            <Text style={{ textAlign: "right", fontSize: 15, color: "white" }}>
              <Text style={{ fontWeight: 700 }}>Most Played:</Text>{" "}
              {group.mostPlayedGame()}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GroupBox;
