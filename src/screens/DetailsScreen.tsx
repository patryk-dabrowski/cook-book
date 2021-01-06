import React, {useEffect} from 'react';
import {Route, ScrollView, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCommentsByRecipeId,
  selectByIdRecipe,
} from '../features/recipesSlice';
import {Recipe} from '../types';
import {RootState} from '../rootReducer';
import Card from '../componets/Card';
import Comment from '../componets/Comment';
import RecipeCard from '../componets/RecipeCard';

const DetailsScreen: React.FC = () => {
  const route: Route = useRoute();
  const id = route.params.id;
  const recipe = useSelector((store: RootState) => selectByIdRecipe(store, id));
  const {description, comments, id: recipeId} = recipe as Recipe;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByRecipeId({recipeId}));
  }, [recipeId, dispatch]);

  const renderComments = () => {
    if (!comments) {
      return false;
    }

    return (
      <Card header={'Comments'}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </Card>
    );
  };

  if (!recipe) {
    return <View />;
  }

  return (
    <ScrollView>
      <RecipeCard recipe={recipe} />
      <Card header={'Description'}>
        <Text>{description}</Text>
      </Card>
      {renderComments()}
    </ScrollView>
  );
};

export default DetailsScreen;
