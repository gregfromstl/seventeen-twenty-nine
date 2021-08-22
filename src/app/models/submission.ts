import { Comment } from './comment';

export interface Submission {
  comments: Comment[];
  description: string;
  title: string;
  url: string;
  user: any;
  votes: number;
}
