import React from 'react';
import {Recipe} from '../types';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import RecipeCard from './RecipeCard';

export interface Props {
  item: Recipe;
}

const RecipeItem: React.FC<Props> = ({item}) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Details', {id: item.id});
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <RecipeCard recipe={item} />
    </TouchableOpacity>
  );
};

export default RecipeItem;
