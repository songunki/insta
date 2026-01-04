
export interface Post {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  category: string;
  date: string;
  commentsCount: number;
  likesCount: number;
}

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  avatar: string;
  postsCount: number;
  followers: string;
  following: string;
}

export enum ViewMode {
  GRID = 'GRID',
  FEED = 'FEED'
}
