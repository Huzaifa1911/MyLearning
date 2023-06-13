import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import AppText from '../Common/AppText';
import {AppTheme} from '../../Assets/Theme';

interface IActionButtonProps {
  title: string;
  onPress: () => void;
}

const ActionButton = ({onPress, title}: IActionButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onPress}>
      <AppText size={14} fontWeight="600">
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 140,
    borderRadius: 8,
    backgroundColor: AppTheme.colors.white,
    borderWidth: 0.3,
    marginTop: 10,
  },
});
