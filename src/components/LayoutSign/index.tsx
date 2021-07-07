import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type LayoutProps = {
  children: JSX.Element[] | JSX.Element;
  title: string;
};

export const LayoutSign = ({ children, title }: LayoutProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.logoBrand}>TGL</Text>
          <View style={styles.logoBorder} />
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.body}>{children}</View>
      <View style={styles.footer}>
        <Text>Copyright 2020 Luby Software</Text>
      </View>
    </View>
  );
};
