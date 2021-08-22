import { Submission } from './submission';

export interface Task_ {
  img: string;
  title: string;
  text: string;
  url: string;
  submissions?: Submission[];
}
