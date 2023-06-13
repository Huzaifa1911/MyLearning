import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useGetAnimes} from '../../Services';
import {propOr} from 'ramda';
import {TAnime} from '../../Types';

import {AnimeCard, Spacer} from '../../Components';

const AnimeSearch = () => {
  const {data} = useGetAnimes();
  const pages: TAnime[] = propOr([], 'pages', data);

  const renderItem = ({item}: {item: TAnime}) => {
    return <AnimeCard anime={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pages}
        contentContainerStyle={styles.animeList}
        keyExtractor={(item, index) => item.mal_id + index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Spacer top={10} />}
      />
    </View>
  );
};

export default AnimeSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  animeList: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    paddingTop: 11,
  },
});
