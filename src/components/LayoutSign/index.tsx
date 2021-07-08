import React from 'react';
import { View, Text } from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

export const LayoutSign = ({ children, title }: LayoutProps) => {
  return (
    <Animatable.View animation='fadeInUpBig' style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logoBrand}>TGL</Text>
          <View style={styles.logoBorder} />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>{children}</View>
      <HideWithKeyboard>
        <Text style={styles.footer}>Copyright 2020 Luby Software</Text>
      </HideWithKeyboard>
    </Animatable.View>
  );
};
