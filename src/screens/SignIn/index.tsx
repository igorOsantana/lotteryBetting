import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authUser } from '../../store/slices/userSlice';
import { View, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import HideWithKeyboard from 'react-native-hide-with-keyboard';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LayoutSign } from '../../components/UI/LayoutSign';
import { ButtonArrow } from '../../components/ButtonArrow';
import { InputDefault } from '../../components/InputDefault';
import { Spinner } from '../../components/UI/Spinner';
import { InputPassword } from '../../components/InputPassword';

import { styles } from './styles';

type SignInProps = {
  email: string;
  password: string;
};

const initialValues: SignInProps = {
  email: '',
  password: '',
};

export const validationYup = Yup.object({
  email: Yup.string().email('Email inválido.').required('Email é obrigatório.'),
});

export const SignIn: React.FC = () => {
  const msgError = useAppSelector(state => state.users.msgError);
  const isLoading = useAppSelector(state => state.users.isLoading);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const goToResetPasswordHandler = () => navigation.navigate('Reset Password');

  const registerHandler = () => navigation.navigate('Sign Up');

  const submitHandler = (values: SignInProps) => dispatch(authUser(values));

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <LayoutSign title='Authentication'>
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
                returnKeyType='next'
                autoCapitalize='none'
                autoCorrect={false}
              />
              {errors.email && (
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
              <Text onPress={goToResetPasswordHandler} style={styles.forget}>
                I forget my password
              </Text>
              {!!msgError && <Text style={styles.error}>{msgError}</Text>}
              <HideWithKeyboard>
                <View style={styles.viewButton}>
                  {isLoading ? (
                    <Spinner />
                  ) : (
                    <ButtonArrow onPress={handleSubmit as any}>
                      <Text>Log In</Text>
                    </ButtonArrow>
                  )}
                </View>
              </HideWithKeyboard>
            </View>
          )}
        </Formik>
        <HideWithKeyboard>
          <View style={styles.viewButton}>
            <ButtonArrow colorGray onPress={registerHandler}>
              <Text>Sign Up</Text>
            </ButtonArrow>
          </View>
        </HideWithKeyboard>
      </LayoutSign>
    </SafeAreaView>
  );
};
