import React, {useEffect} from 'react';
import RecipeList from '../componets/RecipeList';
import Layout from '../componets/Layout';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRecipes, selectAllRecipes} from '../features/recipesSlice';
import {Recipe} from '../types';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const recipes: Recipe[] = useSelector(selectAllRecipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <Layout>
      <RecipeList data={recipes} />
    </Layout>
  );
};

export default HomeScreen;
