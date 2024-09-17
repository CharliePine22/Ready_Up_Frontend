import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import styles from "./searchResults.style";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const SearchResults = ({
  game,
  searchResults,
  loading,
  selectGame,
  currentGame,
}) => {
  /**
   * Shorten the given genre name to a more concise representation.
   * @param {String} genre - The genre name to shorten.
   * @returns {String} The shortened genre name.
   */
  const shortenGenreNames = (genre) => {
    // Switch on the genre name and return a shortened version if applicable.
    switch (genre) {
      // Role-playing (RPG) -> RPG
      case "Role-playing (RPG)":
        return "RPG";
      // Real Time Strategy (RTS) -> RTS
      case "Real Time Strategy (RTS)":
        return "RTS";
      // Hack and slash/Beat 'em up -> Hack/Slash
      case "Hack and slash/Beat 'em up":
        return "Hack/Slash";
      // Turn-based strategy (TBS) is not shortened.
      case "Turn-based strategy (TBS)":
        break;
      // Card & Board Game -> Cards
      case "Card & Board Game":
        return "Cards";
      // Default to the original genre name if no shortening is applicable.
      default:
        return genre;
    }
  };

  /**
   * Determine the multiplayer mode of a game, given its game object from the IGDB API.
   * If the game has no given multiplayer modes, return "2+".
   * If the game has online co-op, return the online co-op max.
   * If the game has offline co-op, return the offline co-op max.
   * @param {Object} game - The game object from the IGDB API.
   * @returns {String} The multiplayer mode of the game.
   */
  const determineMultiplayer = (game) => {
    if (!game.multiplayer_modes) return "2+";
    else {
      if (game.multiplayer_modes[0]?.onlinecoopmax)
        return game.multiplayer_modes[0]?.onlinecoopmax;
      else if (game.multiplayer_modes[0]?.offlinecoopmax)
        return game.multiplayer_modes[0]?.offlinecoopmax;
      else return game.multiplayer_modes[0]?.offlinemax;
    }
  };
  return (
    <View style={styles.searchResultsWrapper}>
      {loading ? (
        <ActivityIndicator
          style={{ marginVertical: "auto" }}
          size="large"
          color="#FFF"
        />
      ) : (
        <View style={styles.searchResultsContainer}>
          <ScrollView>
            {searchResults.map((game) => (
              <Pressable key={game.id} onPress={() => selectGame(game)}>
                <View
                  style={[
                    styles.searchResultItem,
                    {
                      backgroundColor:
                        currentGame?.name == game.name ? "green" : "black",
                    },
                  ]}
                >
                  <Image
                    resizeMode={"cover"}
                    style={styles.searchResultsItemCover}
                    source={{
                      uri: `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`,
                    }}
                  />
                  {/* Container for Searched Game Information */}
                  <View style={styles.searchedItemGameInfo}>
                    <Text style={styles.gameName}>
                      {game.name}
                      {game?.websites?.category == 13 && (
                        <Pressable>
                          <MaterialCommunityIcons
                            style={styles.steamIcon}
                            name="steam"
                            size={20}
                            color={"#66c0f4"}
                          />
                        </Pressable>
                      )}
                    </Text>

                    {/* GENRE INFO */}
                    <View style={styles.genreInfo}>
                      <View style={styles.genreList}>
                        {game.genres.map((genre) => (
                          <Text key={genre.id} style={styles.genreName}>
                            {shortenGenreNames(genre.name)}
                          </Text>
                        ))}
                      </View>
                    </View>

                    {/* GAME MULTIPLAYER MODES */}
                    {game?.game_modes.some((item) => item.id === 2) == true && (
                      <View style={styles.multiplayerModes}>
                        {/* Campaign Coop? */}
                        {game.multiplayer_modes &&
                          game?.multiplayer_modes[0]?.campaigncoop && (
                            <View
                              style={{
                                flexDirection: "row",
                                alignItems: "center",
                              }}
                            >
                              <FontAwesome6
                                style={styles.multiplayerIcon}
                                name="people-carry-box"
                                size={14}
                                color={"white"}
                              />
                              <Text style={styles.multiplayerModeText}>
                                :{" "}
                                {game?.multiplayer_modes[0]?.campaigncoop
                                  ? "Yes"
                                  : "No"}
                              </Text>
                              <Text>|</Text>
                            </View>
                          )}

                        {/* Max Players */}
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <FontAwesome6
                            style={styles.multiplayerIcon}
                            name="people-group"
                            size={14}
                            color={"white"}
                          />
                          <Text style={styles.multiplayerModeText}>
                            : {determineMultiplayer(game)}
                          </Text>
                        </View>
                      </View>
                    )}
                  </View>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchResults;
