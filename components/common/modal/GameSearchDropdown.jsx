import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import useTokenStore from '../../../store/useTokenStore';
import styles from './gameSearchDropdown.style';

const GameSearchDropdown = ({ game }) => {
  const token = useTokenStore((state) => state.token);
  const [loading, setLoading] = useState(false);
  const { searchGame, searchResults } = useTokenStore();

  useEffect(() => {
    setLoading(true);
    const delaySearchFn = setTimeout(() => {
      console.log(game);
      setLoading(false);
      // Send Axios request here
      searchGame(game);
    }, 1500);

    return () => clearTimeout(delaySearchFn);
  }, [game]);

  return (
    <View
      style={[
        styles.gameSearchDropdownWrapper,
        {
          display: game.length > 0 ? 'flex' : 'none',
        },
      ]}
    >
      {loading ? (
        <ActivityIndicator
          size={30}
          color='white'
          style={{ marginVertical: 'auto' }}
        />
      ) : (
        <FlatList
          data={searchResults}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      )}
    </View>
  );
};

export default GameSearchDropdown;
