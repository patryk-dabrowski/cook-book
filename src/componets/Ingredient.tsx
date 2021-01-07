import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Ingredient as IngredientType} from '../types';

interface Props {
  ingredient: IngredientType;
  index: number;
}

const Ingredient: React.FC<Props> = ({ingredient, index}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.index}>{index}.</Text>
      <Text style={styles.name}>
        {ingredient.name}{' '}
        <Text style={styles.quantity}>({ingredient.quantity})</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  index: {
    width: 20,
  },
  name: {
    flex: 1,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#999',
  },
});

export default Ingredient;
