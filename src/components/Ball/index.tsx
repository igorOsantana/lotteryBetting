import React, { useState, useEffect, useCallback, memo } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useAppSelector } from '../../hooks';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

type BallProps = TouchableOpacityProps & {
  number: string;
  color: string;
  handlerSelect: (num: number) => void;
  mini?: boolean;
};

const Ball: React.FC<BallProps> = ({
  number,
  color,
  handlerSelect,
  mini,
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectedBalls = useAppSelector(state => state.cart.selectedBalls);

  const numConverted = Number(number);

  const handlePress = () => handlerSelect(numConverted);

  const thisBallIsSelected = () => selectedBalls.includes(Number(number));

  const handleSelectedBalls = useCallback(() => {
    if (selectedBalls.length === 0) setIsSelected(false);
    else if (selectedBalls.length > 0)
      if (thisBallIsSelected()) setIsSelected(true);
      else setIsSelected(false);
  }, [selectedBalls]);

  useEffect(() => {
    setIsSelected(false);
  }, [color]);

  useEffect(() => {
    handleSelectedBalls();
  }, [selectedBalls]);

  if (mini === true) {
    return (
      <Animatable.View animation='bounceInUp' duration={450}>
        <TouchableOpacity
          onPress={handlePress}
          style={[styles.mini, { backgroundColor: color }]}
        >
          <AntDesign
            style={styles.icon}
            name='close'
            size={10}
            color={theme.colors.white}
          />
          <View>
            <Text style={[styles.text, { fontSize: 14 }]}>
              {('00' + number).slice(-2)}
            </Text>
          </View>
        </TouchableOpacity>
      </Animatable.View>
    );
  }

  return (
    <Animatable.View
      animation={disabled ? 'fadeOutDown' : 'fadeInUp'}
      duration={350}
    >
      <TouchableOpacity
        disabled={disabled}
        onPress={handlePress}
        style={[
          styles.container,
          isSelected ? { backgroundColor: color } : styles.bgNotSelected,
        ]}
      >
        <View>
          <Text style={styles.text}>{('00' + number).slice(-2)}</Text>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default memo(Ball);
