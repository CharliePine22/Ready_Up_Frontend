import { View, Text, ActivityIndicator, FlatList, Image } from "react-native";
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
          <FlatList
            data={searchResults}
            renderItem={({ item: game }) => (
              <View style={styles.searchResultItem}>
                <Image
                  style={styles.searchResultsItemCover}
                  source={`https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`}
                />
                {/* Container for Searched Game Information */}
                <View style={styles.searchedItemGameInfo}>
                  <Text style={{ color: "white" }}>{game.name}</Text>
                  {/* Genre Info */}
                  <View style={styles.genreInfo}>
                    <Text>Genre</Text>
                    <FlatList
                      data={game.genres}
                      renderItem={({ item: genre }) => (
                        <Text>{genre.name}</Text>
                      )}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SearchResults;
