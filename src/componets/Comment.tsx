import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Comment as CommentType} from '../types';
import {formatted} from '../utils/date';

export interface Props {
  comment: CommentType;
}

const Comment: React.FC<Props> = ({comment}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>{comment.content}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{comment.author}</Text>
        <Text style={styles.detailItem}>{formatted(comment.created_at)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 30,
    paddingBottom: 5,
  },
  content: {
    paddingBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailItem: {
    fontSize: 12,
    color: '#666',
  },
});

export default Comment;
