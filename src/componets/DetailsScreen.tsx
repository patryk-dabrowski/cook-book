import React, {useEffect} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

const DATA = {
  id: '2',
  image: 'https://reactnative.dev/img/tiny_logo.png',
  title: 'test 2',
  description:
    'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum',
};

const DetailsScreen: React.FC = () => {
  const {image, title, description} = DATA;
  const route = useRoute();

  useEffect(() => {
    console.log(route.params);
  }, [route]);

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
