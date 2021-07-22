import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { validationYup } from '../SignIn';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import api from '../../services/api';

import { LayoutSign } from '../../components/UI/LayoutSign';
import { ButtonArrow } from '../../components/ButtonArrow';
import { InputDefault } from '../../components/InputDefault';
import { Spinner } from '../../components/UI/Spinner';
import { Snackbar } from '../../components/UI/Snackbar';

import { styles } from './styles';

type initialValuesProps = {
  email: string;
};

const initialValues: initialValuesProps = { email: '' };

export const ResetPassword: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(true);

  const isLoading = useAppSelector(state => state.users.isLoading);

  const navigation = useNavigation();

  const backToSignInHandler = () => navigation.goBack();
  const goToSignUp = () => navigation.navigate('Sign Up');

  const submitHandler = async (values: initialValuesProps) => {
    try {
      const { email } = values;
      const url_resetPassword = 'http://localhost:3000/sign/reset-password';
      await api.post('/passwords', { email, redirect_url: url_resetPassword });
      setShowSnackbar(true);
      setSendEmailSuccess(true);
    } catch (error) {
      setShowSnackbar(true);
      setSendEmailSuccess(false);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <LayoutSign title='Reset password'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationYup}
          onSubmit={submitHandler}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.form}>
              <InputDefault
                label='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
                returnKeyType='done'
                autoCapitalize='none'
                autoCorrect={false}
              />
              {errors.email && (
                <Animatable.Text animation='shake' style={styles.error}>
                  {errors.email}
                </Animatable.Text>
              )}
              <View style={styles.viewButton}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <ButtonArrow onPress={handleSubmit as any}>
                    <Text>Send link</Text>
                  </ButtonArrow>
                )}
              </View>
            </View>
          )}
        </Formik>
        <HideWithKeyboard>
          <View style={styles.viewButton}>
            <ButtonArrow arrowLeft colorGray onPress={backToSignInHandler}>
              <Text>Back</Text>
            </ButtonArrow>
          </View>
          <View style={styles.viewButton}>
            <ButtonArrow colorGray onPress={goToSignUp}>
              <Text>Sign Up</Text>
            </ButtonArrow>
          </View>
        </HideWithKeyboard>
      </LayoutSign>
      <Snackbar
        text={sendEmailSuccess ? 'sendEmail' : 'errorSendEmail'}
        visible={showSnackbar}
        setVisible={setShowSnackbar}
        success={sendEmailSuccess}
        danger={!sendEmailSuccess}
        down
      />
    </SafeAreaView>
  );
};
