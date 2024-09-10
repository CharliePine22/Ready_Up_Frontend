import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./searchResults.style";

const SearchResults = ({ game, searchResults, loading }) => {
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
              <View key={game.id} style={styles.searchResultItem}>
                <Image
                  resizeMode={"cover"}
                  style={styles.searchResultsItemCover}
                  source={{
                    uri: `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`,
                  }}
                />
                {/* Container for Searched Game Information */}
                <View style={styles.searchedItemGameInfo}>
                  <Text style={styles.gameName}>{game.name}</Text>
                  {/* Genre Info */}
                  <View style={styles.genreInfo}>
                    <ScrollView horizontal>
                      <View>
                        {game.genres.map((genre) => (
                          <Text key={genre.id} style={styles.genreName}>
                            {genre.name}
                          </Text>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default SearchResults;
