import React from 'react';
import { View, Text } from 'react-native';
import { Snackbar as SnackbarPaper } from 'react-native-paper';

import { styles } from './styles';

type SnackbackProps = {
  text:
    | 'logged'
    | 'createAcc'
    | 'updateAcc'
    | 'addCart'
    | 'removeCart'
    | 'newBets'
    | 'sendEmail'
    | 'errorSendEmail';
  label?: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  success?: boolean;
  danger?: boolean;
  down?: boolean;
};

export const Snackbar: React.FC<SnackbackProps> = ({
  text,
  label,
  visible,
  setVisible,
  success,
  danger,
  down,
}) => {
  const setToNotVisible = () => setVisible(false);

  const textSnackbar = {
    logged: 'Credenciais encontradas. Entrando...',
    createAcc: 'Conta criada com sucesso. Redirecionando...',
    updateAcc: 'Conta atualizada com sucesso.',
    addCart: 'Adicionado ao carrinho.',
    removeCart: 'Removido do carrinho.',
    newBets: 'Novas apostas salvas.',
    sendEmail: 'Email enviado com sucesso.',
    errorSendEmail: 'Email não encontrado...',
  };

  return (
    <SnackbarPaper
      wrapperStyle={
        down ? { position: 'absolute', bottom: 10 } : styles.wrapper
      }
      duration={3500}
      visible={visible}
      onDismiss={setToNotVisible}
      action={{
        label: label ? label : '',
        labelStyle: [styles.label, (success || danger) && { color: '#fff' }],
      }}
      style={[
        styles.snackbar,
        success && { backgroundColor: '#4BB543' },
        danger && { backgroundColor: 'red' },
      ]}
    >
      <Text style={[styles.text, (success || danger) && { color: '#fff' }]}>
        {textSnackbar[text]}
      </Text>
    </SnackbarPaper>
  );
};
