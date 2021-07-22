import React, { useCallback, useEffect, useState } from 'react';
import { initialValues, initialValuesProps } from '../SignUp';
import { AntDesign } from '@expo/vector-icons';
import { Formik, FormikHelpers } from 'formik';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import api from '../../services/api';
import * as Yup from 'yup';
import * as Animatable from 'react-native-animatable';

import { Header } from '../../components/UI/Header';
import { InputDefault } from '../../components/InputDefault';
import { InputPassword } from '../../components/InputPassword';
import { ButtonArrow } from '../../components/ButtonArrow';
import { Snackbar } from '../../components/UI/Snackbar';
import { AlertModal } from '../../components/UI/AlertModal';

import { styles } from './styles';

const validationYup = Yup.object({
  email: Yup.string().email('Email inválido.'),
});

export const Account: React.FC = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [refreshing] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [msgError, setMsgError] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    email: '',
  });

  const isFocused = useIsFocused();

  const submitHandler = async (
    values: initialValuesProps,
    { resetForm }: FormikHelpers<initialValuesProps>
  ) => {
    setIsLoading(true);
    setMsgError('');
    for (const prop in values) {
      if (values[prop] === '') delete values[prop];
    }
    if (Object.keys(values).length > 0) {
      try {
        await api.put('/users', values);
        setShowSnackbar(true);
        getBetsStored();
        resetForm();
      } catch (error) {
        const { message } = error.response.data[0];
        setMsgError(message);
      }
    } else setShowAlertModal(true);
    setIsLoading(false);
  };

  const getBetsStored = useCallback(async () => {
    try {
      const { data: userData } = await api.get('/users');
      const { username, email } = userData;
      setUserData({ username, email });
    } catch (error) {
      const { message } = error.response.data.error;
      alert(message);
    }
  }, []);

  const handleRefresh = () => getBetsStored();

  useEffect(() => {
    if (isFocused) getBetsStored();
  }, [isFocused]);

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <>
          {showAlertModal && (
            <AlertModal
              text='emptyFields'
              visible={showAlertModal}
              setVisible={setShowAlertModal}
            />
          )}
          <Header />
          <Snackbar
            text='updateAcc'
            label='ok'
            visible={showSnackbar}
            setVisible={setShowSnackbar}
            success
          />
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={handleRefresh}
              />
            }
            style={{ flex: 1 }}
          >
            <View style={styles.container}>
              <View style={styles.viewUserData}>
                <Text style={styles.title}>Account</Text>
                <View style={styles.labelUserData}>
                  <Text style={styles.textLabelUserData}>Name:</Text>
                  <Text style={styles.textUserData}>{userData.username}</Text>
                </View>
                <View style={styles.labelUserData}>
                  <Text style={styles.textLabelUserData}>Email:</Text>
                  <Text style={styles.textUserData}>{userData.email}</Text>
                </View>
              </View>
              <View style={styles.formView}>
                <Text style={styles.title}>
                  Get update <AntDesign name='arrowright' size={26} />
                </Text>
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
                  }) => (
                    <>
                      <View style={styles.form}>
                        <InputDefault
                          label='New name'
                          onChangeText={handleChange('username')}
                          onBlur={handleBlur('username')}
                          value={values.username}
                          returnKeyType='next'
                          autoCapitalize='words'
                          autoCorrect
                        />
                        <InputDefault
                          label='New email'
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          keyboardType='email-address'
                          returnKeyType='next'
                          autoCapitalize='none'
                          autoCorrect={false}
                        />
                        {errors.email && (
                          <Animatable.Text
                            animation='shake'
                            style={styles.error}
                          >
                            {errors.email}
                          </Animatable.Text>
                        )}
                        <InputPassword
                          label='New password'
                          onChangeText={handleChange('password')}
                          onBlur={handleBlur('password')}
                          value={values.password}
                          returnKeyType='done'
                          autoCapitalize='none'
                          autoCorrect={false}
                        />
                        {msgError.length > 0 && (
                          <Animatable.Text
                            animation='shake'
                            style={styles.error}
                          >
                            {msgError}
                          </Animatable.Text>
                        )}
                      </View>
                      <View style={styles.viewButton}>
                        <ButtonArrow onPress={handleSubmit as any}>
                          <Text style={styles.buttonUpdate}>
                            {isLoading ? 'Updating' : 'Update'}
                          </Text>
                        </ButtonArrow>
                      </View>
                    </>
                  )}
                </Formik>
              </View>
            </View>
          </ScrollView>
        </>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
