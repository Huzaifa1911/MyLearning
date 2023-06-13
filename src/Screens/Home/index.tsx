import {View, Button} from 'react-native';
import React from 'react';
import {NavigationService} from '../../Services';
import {SCREENS} from '../../Utils';

const Home = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go To Anime Search"
        onPress={() => NavigationService.navigate(SCREENS.ANIME_SEARCH)}
      />
    </View>
  );
};

export default Home;
