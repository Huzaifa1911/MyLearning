import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SCREENS} from '../Utils';
import {AnimeSearchScreen, HomeScreen} from '../Screens';
import {NavigationService} from '../Services';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREENS.HOME}
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Stack.Screen
          name={SCREENS.ANIME_SEARCH}
          component={AnimeSearchScreen}
          options={{title: 'Anime'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
