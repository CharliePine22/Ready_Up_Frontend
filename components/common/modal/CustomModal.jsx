import { View, Text, Pressable, Modal, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./customModal.style.js";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomModal = ({
  closeModal,
  modalStatus,
  previouslyPlayedGames,
  selectGame,
  currentlySelectedGame,
  selectDate,
}) => {
  const [dateModalOpen, setDateModalOpen] = useState(false);

  let gameListLength = Object.entries(previouslyPlayedGames).length;
  const finalizeChoiceHandler = () => {
    setDateModalOpen(true);
    // closeModal();
  };
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
            <Text style={styles.modalText}>
              Select a game your group has previously played or suggest a new
              one.
            </Text>

            {/* GAME LIST */}
            <View
              style={[
                gameListLength <= 5 && styles.previousGamesListShortened,
                styles.previousGamesList,
              ]}
            >
              <ScrollView showsVerticalScrollIndicator={false}>
                {Object.entries(previouslyPlayedGames)
                  .sort(([a], [b]) => b - a)
                  .map(([position, game], idx) => {
                    return (
                      <View
                        key={game.name}
                        style={{
                          borderBottomColor: "white",
                          borderBottomWidth: 2,
                          borderStyle: "solid",
                        }}
                      >
                        {/* Game Name */}
                        <Pressable
                          style={({ pressed }) => [
                            game.name == currentlySelectedGame?.name &&
                              styles.currentSelectedGame,
                          ]}
                          onPress={() => selectGame(game)}
                        >
                          <Text style={[styles.previousGamesListGameName]}>
                            <>{game.name}</>
                          </Text>
                        </Pressable>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.modalActions}>
              {/* Confirm Button */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={styles.videoGameBtn}
                  onPress={finalizeChoiceHandler}
                >
                  <Text style={[styles.textStyle, { top: 10 }]}>A</Text>
                </Pressable>
                <Text>Select</Text>
              </View>

              {/* Cancel Button */}
              <View
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Pressable style={styles.videoGameBtn} onPress={closeModal}>
                  <Text style={[styles.textStyle, { top: 10 }]}>B</Text>
                </Pressable>
                <Text>Back</Text>
              </View>
            </View>

            {/* Date Time Picker that appears after selecting game */}
            <DateTimePickerModal
              isVisible={dateModalOpen}
              mode="datetime"
              onConfirm={(date) => {
                setDateModalOpen(false);
                selectDate(date);
                closeModal();
              }}
              onCancel={() => {
                setDateModalOpen(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
