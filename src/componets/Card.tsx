import React, {ReactNode} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  header: string;
  children: JSX.Element | ReactNode;
}

const Card: React.FC<Props> = ({header, children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    padding: 10,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  content: {
    padding: 10,
  },
});

export default Card;
