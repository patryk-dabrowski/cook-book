import React, {useCallback, useEffect} from 'react';
import Layout from '../componets/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchRecipes,
  loadingRecipe,
  selectAllRecipes,
} from '../features/recipesSlice';
import {Recipe} from '../types';
import RecipeItem from '../componets/RecipeItem';
import {FlatList, RefreshControl} from 'react-native';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const recipes: Recipe[] = useSelector(selectAllRecipes);
  const loading = useSelector(loadingRecipe);

  const onRefresh = useCallback(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    onRefresh();
  }, [onRefresh]);

  return (
    <Layout>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        data={recipes}
        renderItem={({item}) => <RecipeItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

export default HomeScreen;
