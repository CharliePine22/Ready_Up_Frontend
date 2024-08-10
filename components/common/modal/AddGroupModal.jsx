import { View, Text, Modal, TextInput, Pressable } from "react-native";
import { useState } from "react";
import styles from "./addGroupModal.style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const AddGroupModal = ({ closeModal, modalStatus }) => {
  const [groupName, setGroupName] = useState("");
  const [memberName, setMemberName] = useState("");

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalStatus}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          closeModal;
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={closeModal} style={styles.closeBtn}>
              <MaterialCommunityIcons
                name="close-box-outline"
                size={28}
                color={"white"}
              />
            </Pressable>
            <Text style={styles.modalText}>Create Group</Text>
            <View style={styles.groupFormContainer}>
              <Text>
                To start a new group, create a name and invite at least one
                other member to join.
              </Text>
              <View style={styles.groupForm}>
                {/* Group Name Input */}
                <View style={styles.groupNameForm}>
                  <Text style={styles.formTextHeader}>Group Name</Text>
                  <TextInput
                    style={styles.groupNameInput}
                    onChangeText={setGroupName}
                    value={groupName}
                  />
                </View>
                {/* Member Name Input */}
                <View style={styles.memberNameForm}>
                  <Text style={styles.formTextHeader}>Members</Text>
                  <TextInput
                    style={styles.groupNameInput}
                    onChangeText={setMemberName}
                    value={memberName}
                  />
                </View>
              </View>
              {/* Form Button Actions */}
              <View style={styles.modalActions}>
                <Pressable>
                  <Text>Create Group</Text>
                </Pressable>
                <Pressable>
                  <Text>Cancel</Text>
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
