import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import React from 'react';
import styles from './searchResults.style';

const SearchResults = ({ game, searchResults, loading }) => {
  return (
    <View style={styles.searchResultsWrapper}>
      {loading ? (
        <ActivityIndicator size='large' color='#FFF' />
      ) : (
        <View style={styles.searchResultsContainer}>
          <FlatList
            data={searchResults}
            renderItem={({ item: game }) => (
              <View style={styles.searchResultItem}>
                <Text>{game.name}</Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default SearchResults;
