import React from 'react';
import {FlatList} from 'react-native';
import RecipeItem from './RecipeItem';
import {Recipe} from '../types';

export interface Props {
  data: Recipe[];
}

const RecipeList: React.FC<Props> = (props) => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}) => <RecipeItem item={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RecipeList;
