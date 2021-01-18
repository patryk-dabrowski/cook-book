import React, {useEffect, useState} from 'react';
import {
  Route,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import Ingredient from '../componets/Ingredient';

const DetailsScreen: React.FC = () => {
  const [isShowMore, setShowMore] = useState(false);
  const route: Route = useRoute();
  const id = route.params.id;
  const recipe = useSelector((store: RootState) => selectByIdRecipe(store, id));
  const {description, comments, id: recipeId, ingredients} = recipe as Recipe;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCommentsByRecipeId({recipeId}));
  }, [recipeId, dispatch]);

  if (!recipe) {
    return <View />;
  }

  const renderedIngredients = ingredients && ingredients.length > 0 && (
    <Card header={'Ingredients'}>
      {ingredients.map((ingredient, index) => (
        <Ingredient key={index} index={index + 1} ingredient={ingredient} />
      ))}
    </Card>
  );

  const renderedComments = comments && comments.length > 0 && (
    <Card header={'Comments'}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </Card>
  );

  const toggleShowMore = () => {
    setShowMore((prevState) => !prevState);
  };

  return (
    <ScrollView>
      <RecipeCard recipe={recipe} />
      <Card header={'Description'}>
        {isShowMore ? (
          <>
            <Text>{description.full}</Text>
            <TouchableWithoutFeedback onPress={toggleShowMore}>
              <Text style={styles.showMore}>pokaż mniej</Text>
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <Text>{description.excerpt}</Text>
            <TouchableWithoutFeedback onPress={toggleShowMore}>
              <Text style={styles.showMore}>pokaż więcej</Text>
            </TouchableWithoutFeedback>
          </>
        )}
      </Card>
      {renderedIngredients}
      {renderedComments}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  showMore: {
    color: '#0073ff',
  },
});

export default DetailsScreen;
