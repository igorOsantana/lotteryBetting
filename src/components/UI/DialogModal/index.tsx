import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useAppSelector } from '../../../hooks';

import { styles } from './styles';

type DialogModalProps = {
  btnText: string;
  text: 'remove' | 'save' | 'changeGame' | 'clear';
  visible: boolean;
  danger?: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setConfirm: React.Dispatch<React.SetStateAction<boolean>>;
};

export const DialogModal: React.FC<DialogModalProps> = ({
  btnText,
  text,
  visible,
  danger,
  setVisible,
  setConfirm,
}) => {
  const titles = {
    remove: 'Removendo',
    save: 'Salvando',
    changeGame: 'Trocando',
    clear: 'Limpando',
  };

  const descriptions = {
    remove: 'Tem certeza que deseja remover?',
    save: 'Salvar todas as apostas do carrinho?',
    changeGame:
      'Tem certeza que deseja trocar de jogo?\n\nVocê perderá qualquer feito no jogo atual...',
    clear: 'Deseja limpar todas as bolas selecionadas?',
  };

  const handleCloseModal = () => setVisible(false);

  const handleConfirm = () => {
    setConfirm(true);
    setVisible(false);
  };

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
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, danger ? styles.bgRed : styles.bgDefault]}
            onPress={handleConfirm}
          >
            <Text style={styles.buttonText}>{btnText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
