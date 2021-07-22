import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../../../hooks';

import { styles } from './styles';

type AlertModalProps = {
  text:
    | 'remainingBalls'
    | 'cartInsufficientValue'
    | 'emptyCart'
    | 'emptyFields'
    | 'alreadyEnough';
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AlertModal: React.FC<AlertModalProps> = ({
  text,
  visible,
  setVisible,
}) => {
  const cartTotalPrice = useAppSelector(state => state.cart.cartTotalPrice);
  const maxGameBalls = useAppSelector(
    state => state.cart.selectedGame!['max-number']
  );
  const selectedBalls = useAppSelector(
    state => state.cart.selectedBalls!.length
  );

  const diffBetween = maxGameBalls - selectedBalls;
  const plurality = diffBetween === 1 ? 'bola' : 'bolas';

  const titles = {
    remainingBalls: 'Bolas faltando',
    cartInsufficientValue: 'Valor insuficiente',
    emptyCart: 'Carrinho vazio',
    alreadyEnough: 'Jogo completo',
    emptyFields: 'Campos vazios',
  };

  const descriptions = {
    remainingBalls: `Você escolheu ${selectedBalls} em um total de ${maxGameBalls} bolas.\n\nPara prosseguir complete o jogo escolhendo mais ${diffBetween} ${plurality}.`,
    cartInsufficientValue: `O valor mínino para salvar suas apostas é de R$30,00.\n\nO valor total atual é de R$${cartTotalPrice
      .toFixed(2)
      .replace('.', ',')}.`,
    emptyCart: 'O carrinho está vazio.',
    alreadyEnough: 'O jogo já está completo.',
    emptyFields: 'Nenhum campo preenchido. Nada a atualizar...',
  };

  const handleCloseModal = () => setVisible(false);

  return (
    <Modal isVisible={visible} hasBackdrop onBackdropPress={handleCloseModal}>
      <View style={styles.container}>
        <View style={styles.contentText}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>{titles[text]}</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.textDescription}>{descriptions[text]}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
            <Text style={styles.buttonText}>Got it</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
