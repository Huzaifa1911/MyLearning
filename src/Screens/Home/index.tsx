import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import {NavigationService} from '../../Services';
import {SCREENS} from '../../Utils';
import {ActionButton} from '../../Components';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ActionButton
        onPress={() => NavigationService.navigate(SCREENS.ANIME_SEARCH)}
        title="Search Anime"
      />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 50,
  },
});
