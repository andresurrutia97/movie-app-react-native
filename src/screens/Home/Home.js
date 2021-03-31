import { useTheme } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector, useDispatch } from 'react-redux';
import { TextStyles } from '@/theme';
import { getUser } from '@/selectors/UserSelectors';
import { styles } from '@/screens/Home/Home.styles';
import { strings } from '@/localization';
import { fetchNowPlaying } from '@/actions/HomeActions';

export function Home() {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlaying());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, { color: colors.text }]}>
        {strings.home.message} {user?.username}
      </Text>
      <Text style={[TextStyles.text, { color: colors.text }]}>
        {strings.home.variant} {Config.BUILD_VARIANT}
      </Text>
    </View>
  );
}
