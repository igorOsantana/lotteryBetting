import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import { validationYup } from '../SignIn';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { authUser, createUser } from '../../store/slices/userSlice';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LayoutSign } from '../../components/UI/LayoutSign';
import { ButtonArrow } from '../../components/ButtonArrow';
import { InputDefault } from '../../components/InputDefault';
import { InputPassword } from '../../components/InputPassword';
import { Spinner } from '../../components/UI/Spinner';

import { styles } from './styles';
import { useState } from 'react';
import { Snackbar } from '../../components/UI/Snackbar';

export type initialValuesProps = {
  username: string;
  email: string;
  password: string;
  [key: string]: string;
};

export const initialValues: initialValuesProps = {
  username: '',
  email: '',
  password: '',
};

export const SignUp: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [dataUser, setDataUser] = useState({ email: '', password: '' });

  const msgError = useAppSelector(state => state.users.msgError);
  const isLoading = useAppSelector(state => state.users.isLoading);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const backToSignInHandler = () => navigation.goBack();

  const submitHandler = async (values: initialValuesProps) => {
    await dispatch(createUser(values));
    setDataUser({ email: values.email, password: values.password });
    setShowSnackbar(true);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      if (showSnackbar && !!dataUser) dispatch(authUser(dataUser));
    }, 2500);

    return () => clearTimeout(time);
  }, [showSnackbar]);

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <LayoutSign title='Registration'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationYup}
          onSubmit={submitHandler}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <InputDefault
                label='Name'
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
                returnKeyType='next'
                autoCapitalize='words'
                autoCorrect
              />
              <InputDefault
                label='Email'
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
              />
              {errors.email && touched.email && (
                <Animatable.Text animation='shake' style={styles.error}>
                  {errors.email}
                </Animatable.Text>
              )}
              <InputPassword
                label='Password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                returnKeyType='done'
                autoCapitalize='none'
                autoCorrect={false}
              />
              {!!msgError && (
                <Animatable.Text animation='shake' style={styles.error}>
                  {msgError}
                </Animatable.Text>
              )}
              <HideWithKeyboard>
                <View style={styles.viewButton}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <ButtonArrow onPress={handleSubmit as any}>
                      <Text>Register</Text>
                    </ButtonArrow>
                  )}
                </View>
              </HideWithKeyboard>
            </View>
          )}
        </Formik>
        <HideWithKeyboard>
          <View style={styles.viewButton}>
            <ButtonArrow arrowLeft colorGray onPress={backToSignInHandler}>
              <Text>Back</Text>
            </ButtonArrow>
          </View>
        </HideWithKeyboard>
      </LayoutSign>
      <Snackbar
        text='createAcc'
        visible={showSnackbar}
        setVisible={setShowSnackbar}
        success
        down
      />
    </SafeAreaView>
  );
};
