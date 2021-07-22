import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type ButtonFilterProps = TouchableOpacityProps & {
  title: string;
  color: string;
  selected?: boolean;
  filter?: boolean;
};

export const ButtonFilter: React.FC<ButtonFilterProps> = ({
  title,
  color,
  selected,
  filter,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        { borderColor: color },
        selected ? { backgroundColor: color } : null,
      ]}
    >
      {selected && filter && (
        <AntDesign
          style={styles.isSelected}
          name='close'
          size={10}
          color={theme.colors.white}
        />
      )}
      <View>
        <Text
          numberOfLines={1}
          style={[
            styles.title,
            selected ? { color: theme.colors.white } : { color: color },
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
