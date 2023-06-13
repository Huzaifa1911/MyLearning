import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TAnime} from '../../Types';
import AppText from '../Common/AppText';
import Spacer from '../Common/Spacer';

interface IAnimeCardProps {
  anime: TAnime;
}

const AnimeCard = ({anime}: IAnimeCardProps) => {
  const {title, image, rating} = anime;
  return (
    <View style={styles.card}>
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
    </View>
  );
};

export default AnimeCard;

const styles = StyleSheet.create({
  card: {
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 11,
  },
  textContent: {width: '70%', marginLeft: 10},
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {height: 80, width: 80, borderRadius: 10},
});
