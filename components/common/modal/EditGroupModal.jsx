import {
  View,
  Text,
  Pressable,
  Modal,
  ScrollView,
  FlatList,
  TextInput,
} from 'react-native';
import { useState, useEffect, useRef } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './editGroupModal.style';

const EditGroupModal = ({ modalStatus, closeModal, group }) => {
  const memberListRef = useRef();
  const [invitedMemberList, setInvitedMemberList] = useState(group.sentInvites);
  const [currentMembers, setCurrentMembers] = useState(group.members);

  useEffect(() => {
    if (invitedMemberList.length === 0) return;
    setCurrentMembers((prev) => [...prev, ...invitedMemberList]);
  }, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          closeModal;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={styles.closeModalBtn} onPress={closeModal}>
              <MaterialCommunityIcons
                name='close-box-outline'
                size={32}
                color={'white'}
              />
            </Pressable>
            {/* Start of Group Settings Details */}
            <View style={styles.groupSettingsWrapper}>
              <Text style={styles.modalText}>Group Settings</Text>
              {/* Member List */}
              <View style={styles.memberListContainer}>
                <Text style={styles.formTextHeader}>Members</Text>
                <FlatList
                  ref={memberListRef}
                  data={currentMembers}
                  // ListFooterComponent={
                  //   invitingMember ? (
                  //     <>
                  //       <TextInput
                  //         onSubmitEditing={sendInvite}
                  //         style={styles.groupNameInput}
                  //         onChangeText={setMemberName}
                  //         value={memberName}
                  //         placeholder='Enter user email'
                  //         placeholderTextColor='#FFF'
                  //       />
                  //       {/* <Text>X</Text> */}
                  //     </>
                  //   ) : null
                  // }
                  extraData={invitedMemberList}
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
                        {member.includes('@') && (
                          <Text
                            style={{
                              fontStyle: 'italic',
                              fontSize: 14,
                              color: 'lightgrey',
                            }}
                          >
                            (Pending)
                          </Text>
                        )}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditGroupModal;
