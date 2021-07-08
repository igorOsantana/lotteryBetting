import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { View, Text, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import { validationYup } from '../SignIn';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { LayoutSign } from '../../components/LayoutSign';
import { ButtonArrow } from '../../components/ButtonArrow';
import { InputDefault } from '../../components/InputDefault';

import { styles } from './styles';

type initialValuesProps = {
  email: string;
};

const initialValues: initialValuesProps = {
  email: '',
};

export const ResetPassword = () => {
  const isAuthenticated = useAppSelector(state => state.users.isLogged);
  const isLoading = useAppSelector(state => state.users.isLoading);

  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const backToSignInHandler = () => navigation.goBack();
  const goToSignUp = () => navigation.navigate('Sign Up');

  const submitHandler = async (values: initialValuesProps) =>
    console.log(values);

  return (
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
            />
            {errors.email && (
              <Animatable.Text animation='shake' style={styles.error}>
                {errors.email}
              </Animatable.Text>
            )}
            <View style={styles.viewButton}>
              <ButtonArrow onPress={handleSubmit as any}>
                <Text>Send link</Text>
              </ButtonArrow>
            </View>
          </View>
        )}
      </Formik>
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
    </LayoutSign>
  );
};
