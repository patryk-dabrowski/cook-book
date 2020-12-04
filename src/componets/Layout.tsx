import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({children}) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView style={styles.scrollView}>{children}</SafeAreaView>
  </>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee',
    height: '100%',
  },
});

export default Layout;
