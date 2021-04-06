import React, { useState } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ShadowStyles } from '@/theme';
import image from '@/assets/img/neonBg.jpeg';

export function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <View style={[styles.formContainer, ShadowStyles.shadow]}>
            <Text style={styles.title}>Moovy</Text>
            <TextField
              autoCapitalize="none"
              accessibilityHint={strings.login.usernameHint}
              accessibilityLabel={strings.login.username}
              onChangeText={setUsername}
              placeholder={strings.login.username}
              value={username}
            />
            <TextField
              secureTextEntry
              accessibilityHint={strings.login.passwordHint}
              accessibilityLabel={strings.login.password}
              autoCapitalize="none"
              onChangeText={setPassword}
              placeholder={strings.login.password}
              textContentType="password"
              value={password}
            />
            <ErrorView errors={errors} />
            <Button
              onPress={handleSubmit}
              style={styles.submitButton}
              title={isLoading ? strings.common.loading : strings.login.button}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
