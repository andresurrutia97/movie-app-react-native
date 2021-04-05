import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';
import { persistor } from '@/store';

export function Profile() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    persistor.purge();
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, styles.title]}>Profile</Text>
      <Button title={strings.profile.logout} onPress={logoutUser} />
    </View>
  );
}
