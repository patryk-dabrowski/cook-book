import React from 'react';
import {Image, Route, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectByIdRecipe} from '../features/recipesSlice';
import {Recipe} from '../types';
import {RootState} from '../rootReducer';

const DetailsScreen: React.FC = () => {
  const route: Route = useRoute();
  const id = route.params.id;
  const recipe = useSelector((store: RootState) => selectByIdRecipe(store, id));
  const {image, title, description} = recipe as Recipe;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionHeader}>Description</Text>
        <Text style={styles.descriptionContent}>{description}</Text>
      </View>
    </ScrollView>
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
  description: {
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
    padding: 10,
  },
  descriptionHeader: {
    borderBottomWidth: 1,
    borderColor: '#999',
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  descriptionContent: {
    padding: 10,
  },
});

export default DetailsScreen;
