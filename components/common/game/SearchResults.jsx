import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from './searchResults.style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SearchResults = ({ game, searchResults, loading }) => {
  // console.log(searchResults);

  const shortenGenreNames = (genre) => {
    switch (genre) {
      case 'Role-playing (RPG)':
        return 'RPG';
      case "Hack and slash/Beat 'em up":
        return 'Hack/Slash';
      case 'Turn-based strategy (TBS)':
        break;
      case 'Card & Board Game':
        return 'Cards';
      default:
        return genre;
    }
  };
  return (
    <View style={styles.searchResultsWrapper}>
      {loading ? (
        <ActivityIndicator
          style={{ marginVertical: 'auto' }}
          size='large'
          color='#FFF'
        />
      ) : (
        <View style={styles.searchResultsContainer}>
          <ScrollView>
            {searchResults.map((game) => (
              <Pressable key={game.id}>
                <View style={styles.searchResultItem}>
                  <Image
                    resizeMode={'cover'}
                    style={styles.searchResultsItemCover}
                    source={{
                      uri: `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg`,
                    }}
                  />
                  {/* Container for Searched Game Information */}
                  <View style={styles.searchedItemGameInfo}>
                    <Text style={styles.gameName}>
                      {game.name}
                      {game.websites.category == 13 && (
                        <Pressable>
                          <MaterialCommunityIcons
                            style={styles.steamIcon}
                            name='steam'
                            size={20}
                            color={'#66c0f4'}
                          />
                        </Pressable>
                      )}
                    </Text>

                    {/* Genre Info */}
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
                    {game?.multiplayer_modes &&
                      game.multiplayer_modes[0]?.onlinecoop && (
                        <View style={styles.multiplayerModes}>
                          <Text style={{ color: 'white' }}>
                            Campaign Coop:{' '}
                            {game.multiplayer_modes[0].campaigncoop
                              ? 'Yes'
                              : 'No'}
                          </Text>
                          <Text style={{ color: 'white' }}>
                            Max Players:{' '}
                            {game.multiplayer_modes[0].onlinecoopmax}
                          </Text>
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
