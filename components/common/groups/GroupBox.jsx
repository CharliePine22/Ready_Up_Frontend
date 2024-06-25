import React from 'react';
import { Text, View, Image } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './groupBox.style';

const GroupBox = ({ group }) => {
  console.log(group.chooseRandomGame());
  return (
    <View style={styles.groupBoxWrapper}>
      <View style={styles.groupAvatarBox}></View>
      <View style={styles.innerGroupBox}>
        <Text style={styles.groupName}>{group.groupName}</Text>
        <View style={styles.memberCountContainer}>
          <MaterialCommunityIcons name='account-group' size={20} />
          <Text style={styles.memberCount}>{group.groupCount()}</Text>
        </View>
      </View>
      <View style={styles.lowerSection}>
        <View>
          <Text style={{ textAlign: 'right' }}>
            <Text style={{ fontWeight: 700 }}>Recently Played:</Text>{' '}
            {group.recentlyPlayed}
          </Text>
          <Text style={{ textAlign: 'right' }}>
            <Text style={{ fontWeight: 700 }}>Last Played:</Text>{' '}
            {group.lastPlayed}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default GroupBox;
