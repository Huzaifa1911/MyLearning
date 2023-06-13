import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {PropsWithChildren, useMemo} from 'react';
import {Else, If, Then} from 'react-if';

import {AppTheme} from '../../Assets/Theme';
import Spacer from './Spacer';

export interface IAppTextProps {
  onPress?: () => void;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  containerStyle?: StyleProp<ViewStyle>;
  textAlign?: 'center' | 'left' | 'right' | 'justify' | 'auto';
  textDecorationLine?: 'underline' | 'none' | 'line-through';
  textTransform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  color?: string;
  size?: number;
  textProps?: TextProps;
  numberOfLines?: number;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | 'normal'
    | 'bold';
}

const AppText = (props: PropsWithChildren<IAppTextProps>) => {
  const {
    children,
    color = AppTheme.colors.text,
    containerStyle,
    leftIcon,
    numberOfLines,
    onPress,
    rightIcon,
    size = 16,
    textAlign = 'left',
    textDecorationLine = 'none',
    textProps,
    textTransform = 'none',
    fontWeight = '400',
  } = props;
  const disabled = !onPress;

  const appTextStyles = useMemo(
    () =>
      StyleSheet.flatten([
        {
          fontSize: size,
          fontWeight,
          textAlign: textAlign,
          textTransform,
          textDecorationLine,
          color,
        },
      ]),
    [size, textAlign, textTransform, textDecorationLine, color, fontWeight],
  );

  return (
    <If condition={disabled}>
      <Then>
        <View style={[styles.content, containerStyle]}>
          <Spacer right={5}>{leftIcon}</Spacer>
          <Text
            numberOfLines={numberOfLines}
            style={appTextStyles}
            {...textProps}>
            {children}
          </Text>
          <Spacer left={5}>{rightIcon}</Spacer>
        </View>
      </Then>

      <Else>
        <TouchableOpacity
          style={[styles.content, containerStyle]}
          onPress={onPress}
          activeOpacity={0.6}>
          <Spacer right={5}>{leftIcon}</Spacer>
          <Text
            numberOfLines={numberOfLines}
            style={appTextStyles}
            {...textProps}>
            {children}
          </Text>
          <Spacer left={5}>{rightIcon}</Spacer>
        </TouchableOpacity>
      </Else>
    </If>
  );
};

export default AppText;

const styles = StyleSheet.create({
  content: {flexDirection: 'row', alignItems: 'center'},
});
