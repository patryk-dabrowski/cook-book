import {schema} from 'normalizr';

export const userEntity = new schema.Entity('users');
export const commentEntity = new schema.Entity('comments', {
  author: userEntity,
});
export const articleEntity = new schema.Entity('recipes', {
  author: userEntity,
  comments: [commentEntity],
});
