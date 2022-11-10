import { TweetProps } from '../components/Tweet';

export interface IUser {
  name: string,
    email: string,
    password: string,
    posts: TweetProps[],
}