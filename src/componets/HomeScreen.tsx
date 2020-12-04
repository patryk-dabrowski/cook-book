import React from 'react';
import RecipeList from './RecipeList';

const DATA = [
  {
    id: '1',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'test 1',
    description:
      'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
  },
  {
    id: '2',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'test 2',
    description:
      'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
  },
  {
    id: '3',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'test 3',
    description:
      'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
  },
  {
    id: '4',
    image: 'https://reactnative.dev/img/tiny_logo.png',
    title: 'test 4',
    description:
      'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
  },
];

const HomeScreen: React.FC = () => {
  return <RecipeList data={DATA} />;
};

export default HomeScreen;
