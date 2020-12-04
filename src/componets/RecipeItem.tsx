import React from 'react';
import {Recipe} from '../types';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

export interface Props {
  item: Recipe;
}

const RecipeItem: React.FC<Props> = ({item}) => {
  const {title, image} = item;

  const onPress = () => {
    //  TODO
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: -10,
  },
});

export default RecipeItem;
