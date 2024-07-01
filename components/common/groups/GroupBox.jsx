import React from 'react';
import { Text, View, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './groupBox.style';

const GroupBox = ({ group, openGroup }) => {
  // console.log(group.mostPlayedGame());
  return (
    <View style={styles.groupBoxWrapper} onClick={openGroup}>
      <View style={styles.groupAvatarBox}></View>
      <View style={styles.innerGroupBox}>
        <Text style={styles.groupName}>{group.groupName}</Text>
        <View style={styles.memberCountContainer}>
          <MaterialCommunityIcons name='account-group' size={20} />
          <Text style={styles.memberCount}>{group.groupCount()}</Text>
        </View>
        <View style={styles.memberCountContainer}>
          <MaterialCommunityIcons
            name='account-multiple-check'
            size={22}
            style={{ marginTop: 2 }}
          />
          <Text style={styles.readyCount}>{group.groupCount()}</Text>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <Text style={{ textAlign: 'right', fontSize: 15 }}>
          <Text style={{ fontWeight: 700 }}>Recently Played:</Text>{' '}
          {group.recentlyPlayed}
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 15 }}>
          <Text style={{ fontWeight: 700 }}>Last Played:</Text>{' '}
          {group.lastPlayed}
        </Text>
        <Text style={{ textAlign: 'right', fontSize: 15 }}>
          <Text style={{ fontWeight: 700 }}>Most Played:</Text>{' '}
          {group.mostPlayedGame()}
        </Text>
      </View>
    </View>
  );
};

export default GroupBox;
