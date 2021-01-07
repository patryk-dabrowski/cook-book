import firestore from '@react-native-firebase/firestore';
import {Comment, Recipe} from '../types';

export const fetchRecipes = async () => {
  const recipes = await firestore()
    .collection('Recipes')
    .orderBy('created_at', 'desc')
    .get();
  const data: Recipe[] = [];

  recipes.forEach((recipe) => {
    const {
      created_at,
      image,
      title,
      description,
      ingredients,
      score,
      difficulty,
      preparation_time,
      author,
    } = recipe.data();

    data.push({
      id: recipe.id,
      created_at: new Date(created_at.seconds * 1000).toISOString(),
      image,
      title,
      description,
      ingredients,
      score,
      difficulty,
      preparation_time,
      author,
    });
  });

  return data;
};

export const fetchCommentsByRecipeId = async (recipeId: string) => {
  const recipeDoc = firestore().collection('Recipes').doc(recipeId);
  const comments = await firestore()
    .collection('Comments')
    .where('recipe', '==', recipeDoc)
    .get();
  const data: Comment[] = [];

  comments.forEach((comment) => {
    const {created_at, recipe, author, content} = comment.data();
    data.push({
      id: comment.id,
      created_at: new Date(created_at.seconds * 1000).toISOString(),
      recipe: recipe.id,
      author,
      content,
    });
  });

  return data;
};
