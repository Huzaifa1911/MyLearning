import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TAnime} from '../../Types';
import AppText from '../Common/AppText';
import Spacer from '../Common/Spacer';
import {AppTheme} from '../../Assets/Theme';

interface IAnimeCardProps {
  anime: TAnime;
  onPress: () => void;
}

const AnimeCard = ({anime, onPress}: IAnimeCardProps) => {
  const {title, image, rating} = anime;
  const disabled = !onPress;
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.6}
      onPress={onPress}
      testID="animeCard"
      disabled={disabled}>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{uri: image ?? ''}}
          resizeMode="cover"
        />

        <View style={styles.textContent}>
          <AppText size={18} fontWeight="600" numberOfLines={2}>
            {title}
          </AppText>
          <Spacer top={10} />
          <AppText size={14} fontWeight="400">
            {rating}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 8,
    borderWidth: 0.3,
    borderRadius: 11,
    shadowColor: AppTheme.colors.backdrop,
    backgroundColor: AppTheme.colors.white,
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // shadowOffset: {width: 0, height: 5},
  },
  textContent: {width: '70%', marginLeft: 10},
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {height: 80, width: 80, borderRadius: 10},
});
