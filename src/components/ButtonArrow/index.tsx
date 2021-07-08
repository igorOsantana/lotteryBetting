import React, { ReactNode } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { Text, View, TextProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type Props = TextProps & {
  children: ReactNode;
  arrowLeft?: boolean;
  colorGray?: boolean;
};

export const ButtonArrow = ({
  children,
  arrowLeft,
  colorGray,
  ...rest
}: Props) => {
  return (
    <View style={styles.container}>
      {arrowLeft && (
        <AntDesign
          style={[styles.defaultColor, colorGray && styles.grayColor]}
          name='arrowleft'
          size={24}
        />
      )}
      <Text
        {...rest}
        numberOfLines={1}
        style={[
          styles.textButton,
          colorGray ? styles.grayColor : styles.defaultColor,
        ]}
      >
        {children}
      </Text>
      {!arrowLeft && (
        <AntDesign
          style={[
            styles.defaultColor,
            colorGray ? styles.grayColor : styles.defaultColor,
          ]}
          name='arrowright'
          size={24}
        />
      )}
    </View>
  );
};
