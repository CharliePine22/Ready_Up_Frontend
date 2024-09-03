import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./searchResults.style";

const SearchResults = ({ game, searchResults, loading }) => {
  return (
    <View style={styles.searchResultsWrapper}>
      {loading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : (
        <Text>{game}</Text>
      )}
    </View>
  );
};

export default SearchResults;
