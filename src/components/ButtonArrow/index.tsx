import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type ButtonArrowProps = TouchableOpacityProps & {
  children: ReactNode;
  arrowLeft?: boolean;
  colorGray?: boolean;
};

export const ButtonArrow: React.FC<ButtonArrowProps> = ({
  children,
  arrowLeft,
  colorGray,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...props} style={styles.container}>
      {arrowLeft && (
        <AntDesign
          style={[styles.defaultColor, colorGray && styles.grayColor]}
          name='arrowleft'
          size={24}
        />
      )}
      <Text
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
    </TouchableOpacity>
  );
};
