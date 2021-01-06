import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Difficulty, Recipe} from '../types';

export interface Props {
  recipe: Recipe;
}

const difficultyMapping = (difficulty: Difficulty) => {
  switch (difficulty) {
    case Difficulty.EASY:
      return 'easy';
    case Difficulty.MEDIUM:
      return 'medium';
    case Difficulty.HARD:
      return 'hard';
    default:
      return;
  }
};

const RecipeCard: React.FC<Props> = ({recipe}) => {
  const {image, title, score, author, difficulty, preparation_time} = recipe;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: image}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.details}>
        <Text>Score {score}/5</Text>
        <Text>Level {difficultyMapping(difficulty)}</Text>
      </View>
      <View style={styles.details}>
        <Text>Created by {author}</Text>
        <Text>{preparation_time}</Text>
      </View>
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
  details: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
});

export default RecipeCard;
