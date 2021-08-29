import { Submission } from './submission';

export interface Task_ {
  id: string;
  img: string;
  title: string;
  text: string;
  url: string;
  submissions?: Submission[];
  tags?: string[];
}
