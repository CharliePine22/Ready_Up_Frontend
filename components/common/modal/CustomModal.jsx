import { View, Text, Pressable, Modal, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./customModal.style.js";
import DatePicker from "react-native-date-picker";

const CustomModal = ({
  closeModal,
  modalStatus,
  previouslyPlayedGames,
  selectGame,
  currentlySelectedGame,
}) => {
  const [date, setDate] = useState(new Date());
  const [dateModalOpen, setDateModalOpen] = useState(false);

  let gameListLength = Object.entries(previouslyPlayedGames).length;
  const finalizeChoiceHandler = () => {
    setDateModalOpen(true);
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
                  .map(([gameName, hoursPlayed], idx) => {
                    return (
                      <View
                        key={gameName}
                        style={{
                          borderBottomColor: "white",
                          borderBottomWidth: 2,
                          borderStyle: "solid",
                        }}
                      >
                        {/* Game Name */}
                        <Pressable
                          style={({ pressed }) => [
                            gameName == currentlySelectedGame &&
                              styles.currentSelectedGame,
                          ]}
                          onPress={() => selectGame(gameName)}
                        >
                          <Text style={[styles.previousGamesListGameName]}>
                            <>{gameName}</>
                          </Text>
                        </Pressable>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
            <View style={styles.modalActions}>
              {/* Confirm Button */}
              <Pressable
                style={styles.videoGameBtn}
                onPress={finalizeChoiceHandler}
              >
                <Text style={[styles.textStyle, { top: 10 }]}>A</Text>
              </Pressable>

              {/* Cancel Button */}
              <Pressable style={styles.videoGameBtn} onPress={closeModal}>
                <Text style={[styles.textStyle, { top: 10 }]}>B</Text>
              </Pressable>
            </View>
            {/* <DatePicker
              modal
              open={dateModalOpen}
              date={date}
              onConfirm={(date) => {
                setDateModalOpen(false);
                setDate(new Date(date));
              }}
              onCancel={() => {
                setDateModalOpen(false);
              }}
            /> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
