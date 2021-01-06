import React from 'react';
import {Text, View} from 'react-native';
import {Comment as CommentType} from '../types';

export interface Props {
  comment: CommentType;
}

const Comment: React.FC<Props> = ({comment}) => {
  return (
    <View>
      <Text>{comment.content}</Text>
    </View>
  );
};

export default Comment;
