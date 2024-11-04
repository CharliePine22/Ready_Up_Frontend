import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useState, useRef, useEffect } from 'react';
import styles from './addGroupModal.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import app from '../../../firebaseConfig';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import useAuthStore from '../../../store/useAuthStore';
import GameSearchDropdown from './GameSearchDropdown';

const AddGroupModal = ({ closeModal, modalStatus }) => {
  const [groupName, setGroupName] = useState('');
  const [gameName, setGameName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [invitingMember, setInvitingMember] = useState(false);
  const [invitedMemberList, setInvitedMemberList] = useState([]);
  const [groupCreationError, setGroupCreationError] = useState(false);
  const memberListRef = useRef();

  const { currentUser, refreshUserData } = useAuthStore();

  const db = getFirestore(app);

  // Listen to see if user is addding a new member and jump to the bottom or top of the list.
  useEffect(() => {
    if (memberListRef.current.props.data.length == 0 && !invitingMember) return;

    if (invitingMember) {
      memberListRef.current.scrollToEnd();
    } else {
      memberListRef.current.scrollToIndex({ index: 0 });
    }
  }, [invitingMember]);

  // Update the invited members list
  const sendInvite = () => {
    setInvitedMemberList((previous) => [...previous, memberName]);
    setInvitingMember(false);
    setMemberName('');
  };

  // Finalize the members and send invites to all emails and create group.
  const createGroup = async () => {
    let userGroupIds = [];
    // Grab ids of groups that user is a part of
    currentUser.groups.map((group) => {
      userGroupIds.push(group._key.path.segments[6]);
    });

    // Grab all groups from DB
    let allGroupNames = [];
    const groupQuerySnapshot = await getDocs(collection(db, 'Groups'));
    groupQuerySnapshot.forEach((doc) => {
      if (userGroupIds.includes(doc.id))
        allGroupNames.push(doc.data().groupName);
    });

    if (allGroupNames.includes(groupName)) {
      alert('Group name is already in use.');
      setGroupCreationError(true);
      return;
    } else if (!groupName) {
      alert("What's your group name again?");
      setGroupCreationError(true);
      return;
    } else if (invitedMemberList.length == 0) {
      alert('A group involves more than one person...');
      setGroupCreationError(true);
      return;
    } else {
      const docRef = await addDoc(collection(db, 'Groups'), {
        groupName: groupName,
        members: [currentUser.name],
        groupCount: 1,
        gamesList: [
          {
            name: gameName,
            playCount: 0,
          },
        ],
        sentInvites: invitedMemberList,
        readyCount: 0,
        gameChosen: 'N/A',
        recentlyPlayed: 'N/A',
        lastPlayed: 'N/A',
        proposedDate: '',
      });

      refreshUserData(currentUser.uid);
    }
    closeModal();
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ]);
          Alert.alert('Modal has been closed.');
          closeModal;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {/* Close Modal Button */}
            <Pressable onPress={closeModal} style={styles.closeBtn}>
              <MaterialCommunityIcons
                name='close-box-outline'
                size={32}
                color={'white'}
              />
            </Pressable>
            <Text style={styles.modalText}>Create Group</Text>
            <View style={styles.groupFormContainer}>
              <View style={styles.groupFormWrapper}>
                {/* Group Name Input */}
                <View style={styles.groupNameForm}>
                  <Text style={styles.formTextHeader}>Group Name</Text>
                  <TextInput
                    style={
                      !groupCreationError
                        ? styles.groupNameInput
                        : [styles.groupNameInput, styles.groupNameInputError]
                    }
                    onChangeText={setGroupName}
                    value={groupName}
                    placeholder='Justice League'
                    placeholderTextColor={'lightgrey'}
                  />
                </View>
                {/* Favorite Game Input */}
                <View style={styles.groupNameForm}>
                  <Text style={styles.formTextHeader}>
                    Favorite Game / Recently Played
                  </Text>
                  <TextInput
                    style={
                      !groupCreationError
                        ? styles.groupNameInput
                        : [styles.groupNameInput, styles.groupNameInputError]
                    }
                    onChangeText={setGameName}
                    value={gameName}
                    placeholder='Doki Doki Literature Club'
                    placeholderTextColor={'lightgrey'}
                  />
                  <GameSearchDropdown game={gameName} />
                </View>
                {/* Member Invite Form */}
                <View style={styles.memberNameForm}>
                  <Text style={styles.formTextHeader}>Members</Text>
                  <View style={styles.memberListContainer}>
                    {/* Send new invite button */}
                    <Pressable
                      onPress={() => setInvitingMember(!invitingMember)}
                      style={styles.addMemberBtn}
                    >
                      {invitingMember ? (
                        <MaterialCommunityIcons
                          name='minus-box-outline'
                          size={24}
                          color={'white'}
                        />
                      ) : (
                        <MaterialCommunityIcons
                          name='plus-box-outline'
                          size={24}
                          color={'white'}
                        />
                      )}
                    </Pressable>

                    {invitedMemberList.length == 0 && !invitingMember && (
                      <View style={styles.emptyListContainer}>
                        <Text style={styles.emptyListText}>
                          Press the + button to begin inviting other gamers!
                        </Text>
                      </View>
                    )}

                    {/* Invited members list */}
                    <FlatList
                      ref={memberListRef}
                      data={invitedMemberList}
                      ListFooterComponent={
                        invitingMember ? (
                          <>
                            <TextInput
                              onSubmitEditing={sendInvite}
                              style={styles.groupNameInput}
                              onChangeText={setMemberName}
                              value={memberName}
                              placeholder='Enter user email'
                              placeholderTextColor='#FFF'
                            />
                            {/* <Text>X</Text> */}
                          </>
                        ) : null
                      }
                      extraData={invitingMember}
                      renderItem={({ item: member }) => (
                        <View
                          style={{
                            borderBottomWidth: 1,
                            borderColor: 'white',
                            borderStyle: 'solid',
                          }}
                        >
                          <Text style={styles.memberInvited}>
                            {member + ' '}
                            <Text
                              style={{
                                fontStyle: 'italic',
                                fontSize: 14,
                                color: 'lightgrey',
                              }}
                            >
                              (Pending)
                            </Text>
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              </View>
              {/* Form Button Actions */}
              <View style={styles.modalActions}>
                <Pressable onPress={createGroup}>
                  <Text>Create Group</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddGroupModal;
