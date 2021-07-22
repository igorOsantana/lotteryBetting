import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type SubHeaderProps = {
  title: string;
  subtitle: string;
  buttons: JSX.Element[];
};

export const SubHeader: React.FC<SubHeaderProps> = ({
  title,
  subtitle,
  buttons,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {buttons.length > 0 ? (
        <>
          <Text style={styles.subtitle}>{subtitle}</Text>
          <View
            style={[
              styles.buttonsContainer,
              buttons.length < 3 && { justifyContent: 'center' },
            ]}
          >
            {buttons}
          </View>
        </>
      ) : null}
    </View>
  );
};
