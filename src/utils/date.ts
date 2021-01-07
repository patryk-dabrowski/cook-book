import {format} from 'date-fns';

export const formatted = (date: string) => {
  return format(new Date(date), 'dd-MM-yyyy HH:mm');
};
