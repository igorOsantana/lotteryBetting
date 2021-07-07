import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';

import { styles } from './styles';

const initialValues = {
  email: '',
  password: '',
  username: '',
};

export const FormSign = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              style={styles.input}
              placeholder='Email'
            />
            <TextInput
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              style={styles.input}
              placeholder='Password'
            />
            <Button onPress={handleSubmit as any} title='Submit' />
          </View>
        )}
      </Formik>
    </View>
  );
};
