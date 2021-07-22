import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import * as Animatable from 'react-native-animatable';

import { styles } from './styles';

type LayoutProps = {
  title: string;
};

export const LayoutSign: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <Animatable.View animation='fadeInUpBig' style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
          behavior={Platform.select({
            ios: 'padding',
            android: undefined,
          })}
          style={styles.container}
        >
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
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Animatable.View>
  );
};
